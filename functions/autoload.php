<?php
/**
 * Class Autoloader for the Herringbone Project
 *
 * After registering this autoload function with SPL, the following line
 * would cause the function to attempt to load the \Foo\Bar\Baz\Qux class
 * from /path/to/project/src/Baz/Qux.php:
 *
 *      new \Foo\Bar\Baz\Qux;
 *
 * @param string $class The fully-qualified class name.
 */
spl_autoload_register( function( $class ) {

    $namespace = 'Jefferson\\Herringbone\\';
    $root_dir = get_template_directory();
    $sub_dir = str_replace( $root_dir, '', dirname( __FILE__ ) );
    $filename_prefix = 'class-';

    // does the class use the namespace prefix?
    $namespace_length = strlen( $namespace );
    if (strncmp( $namespace, $class, $namespace_length ) !== 0) {
        // no, move to the next registered autoloader
        return;
    }

    $relative_classname = substr( $class, $namespace_length );
    $classname = array_reverse( explode( '\\', $class ) )[0];
    $sub_namespace = str_replace( $classname, '', $relative_classname );

    $filename = str_replace('\\', DIRECTORY_SEPARATOR, $sub_namespace . DIRECTORY_SEPARATOR . $filename_prefix . $classname . '.php' );
    $class_filepath = strtolower( str_replace( '_', '-', $root_dir . $sub_dir . $filename ) );

    // if the file exists, require it
    if ( file_exists( $class_filepath ) ) {
        require $class_filepath;
    } else {
        echo '<script>console.log("ERROR: herringbone php autoload | Class not found: ' . $classname . '");</script>';
    }
});