CREATE TABLE personas (
id int(11) UNSIGNED NOT NULL primary key AUTO_INCREMENT,
name varchar(50) NOT NULL DEFAULT '',
email char(30) NOT NULL DEFAULT '',
state varchar(30) NOT NULL DEFAULT '',
city varchar(50) NOT NULL DEFAULT '',
) ENGINE=InnoDB DEFAULT CHARSET=latin1;