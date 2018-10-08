<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'benehiko_wp1');

/** MySQL database username */
define('DB_USER', 'benehiko_wp1');

/** MySQL database password */
define('DB_PASSWORD', 'F]&BRAv^@#j5&P9N9].00[(2');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ZPrWpYy3D3MhlMq9IkdDTYGL3n2EefZqJcLVObtkt6GwgfDz8BGpRC0UQtUCTPvO');
define('SECURE_AUTH_KEY',  'Ze4t5KH08DM1F5f9NelPO10oWep03qxY2ZpLJs0lPBZPOwT5XwAMPi6fDgWx6IfU');
define('LOGGED_IN_KEY',    'hLg380VbXkuNVDTEAZ4Hazk6eBtSwMRLeaqzF38G9MQNnWI9U8o1f6I2YtleWROb');
define('NONCE_KEY',        'HevB2eTdqZPe1fuXExgRLGaStrfGZuR3R2qPl7sPzfNxPgUzGVYw7hfCs2KpyTnV');
define('AUTH_SALT',        '6zRe0htak47LeRY9HwFi7livskz8iEyDNyeKbicD5hF4oVnGLUGKpSVc8JpO4kph');
define('SECURE_AUTH_SALT', 'OBOp3XueUz69zOsoQyDwF8W4MXKtKiRmAGuzQdcJVMHIpV1mBAGwekVzgJcJSbJY');
define('LOGGED_IN_SALT',   'kSKk9qhnMCYoOSKCxYQ9JVlwarK5KOEf8U8ddoGgP2v2CBGgvRgBY63YTcwrbpA3');
define('NONCE_SALT',       '9NK4alWIqRsLZP2gZZwMAdpqImEnnxlAcj8JfqMJ9OlNvEjL18sFHTPQZdt3EAKD');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
