use `smart-shop`;

-- role table
INSERT INTO `smart-shop`.`role` (`ro_id`, `ro_name`) VALUES ('U', 'ROLE_USER');
INSERT INTO `smart-shop`.`role` (`ro_id`, `ro_name`) VALUES ('M', 'ROLE_MANAGER');
INSERT INTO `smart-shop`.`role` (`ro_id`, `ro_name`) VALUES ('A', 'ROLE_ADMIN');
INSERT INTO `smart-shop`.`role` (`ro_id`, `ro_name`) VALUES ('S', 'ROLE_SUPER_USER');


-- user table
INSERT INTO `smart-shop`.`user` (`us_id`, `us_first_name`, `us_last_name`, `us_age`, `us_gender`, `us_contact`, `us_password`, `us_status`, `us_secret_question_1`, `us_secret_answer_1`, `us_secret_question_2`, `us_secret_answer_2`, `us_secret_question_3`, `us_secret_answer_3`, `us_ro_id`)
VALUES ('su', 'Super', 'User', '20', 'F', '1234567890', '$2y$10$rtKgYrFaR22GMGtNbmNI8eUwmWzWi/KBNysNA9hDbNB8tHct5eHgm', 'A', 'What is the name of your first school?', 'A', 'Who is your favorite teacher?', 'B', 'What is the name of your hometown', 'C', 'S');


-- category table
INSERT INTO `smart-shop`.`category` (`ca_id`, `ca_name`) VALUES ('1', 'Electronics');
INSERT INTO `smart-shop`.`category` (`ca_id`, `ca_name`) VALUES ('2', 'Households');
INSERT INTO `smart-shop`.`category` (`ca_id`, `ca_name`) VALUES ('3', 'Utensils');
INSERT INTO `smart-shop`.`category` (`ca_id`, `ca_name`) VALUES ('4', 'Grocery');

INSERT INTO `smart-shop`.`secret_question` (`id`, `sq_question`) VALUES ('1', 'What is the name of your first school?');
INSERT INTO `smart-shop`.`secret_question` (`id`, `sq_question`) VALUES ('2', 'What is the name of your first pet?');
INSERT INTO `smart-shop`.`secret_question` (`id`, `sq_question`) VALUES ('3', 'What is the maiden name of your mother?');
INSERT INTO `smart-shop`.`secret_question` (`id`, `sq_question`) VALUES ('4', 'Who is your favorite teacher?');
INSERT INTO `smart-shop`.`secret_question` (`id`, `sq_question`) VALUES ('5', 'What is the name of your hometown');



