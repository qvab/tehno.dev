<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit77a467d5323ba7825007e91ddb8ae762
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'A3Rev\\' => 6,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'A3Rev\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes',
        ),
    );

    public static $classMap = array (
        'A3Rev\\LazyLoad' => __DIR__ . '/../..' . '/classes/class-a3-lazy-load.php',
        'A3Rev\\LazyLoad\\Addons' => __DIR__ . '/../..' . '/classes/addons/class-a3-lazy-load-addons-page.php',
        'A3Rev\\LazyLoad\\Excludes' => __DIR__ . '/../..' . '/classes/class-a3-lazy-load-excludes.php',
        'A3Rev\\LazyLoad\\Hook_Filter' => __DIR__ . '/../..' . '/classes/class-a3-lazy-load-filter.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit77a467d5323ba7825007e91ddb8ae762::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit77a467d5323ba7825007e91ddb8ae762::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit77a467d5323ba7825007e91ddb8ae762::$classMap;

        }, null, ClassLoader::class);
    }
}
