use `smart-shop`;

-- role table
INSERT INTO `smart-shop`.`role` (`ro_id`, `ro_name`) VALUES ('U', 'ROLE_USER');
INSERT INTO `smart-shop`.`role` (`ro_id`, `ro_name`) VALUES ('M', 'ROLE_MANAGER');
INSERT INTO `smart-shop`.`role` (`ro_id`, `ro_name`) VALUES ('A', 'ROLE_ADMIN');
INSERT INTO `smart-shop`.`role` (`ro_id`, `ro_name`) VALUES ('S', 'ROLE_SUPER_USER');


-- user table
INSERT INTO `smart-shop`.`user` (`us_id`, `us_first_name`, `us_last_name`, `us_age`, `us_gender`, `us_contact`, `us_password`, `us_status`, `us_secret_question_1`, `us_secret_answer_1`, `us_secret_question_2`, `us_secret_answer_2`, `us_secret_question_3`, `us_secret_answer_3`, `us_ro_id`)
VALUES ('su', 'Super', 'User', '20', 'M', '1234567890', '$2y$10$rtKgYrFaR22GMGtNbmNI8eUwmWzWi/KBNysNA9hDbNB8tHct5eHgm', 'A', 'What is the name of your first school?', 'A', 'Who is your favorite teacher?', 'B', 'What is the name of your hometown', 'C', 'S');
INSERT INTO `smart-shop`.`user` (`us_id`, `us_first_name`, `us_last_name`, `us_age`, `us_gender`, `us_contact`, `us_password`, `us_status`, `us_secret_question_1`, `us_secret_answer_1`, `us_secret_question_2`, `us_secret_answer_2`, `us_secret_question_3`, `us_secret_answer_3`, `us_ro_id`)
VALUES ('mgr', 'Shop', 'Manager', '20', 'F', '1234567890', '$2y$10$rtKgYrFaR22GMGtNbmNI8eUwmWzWi/KBNysNA9hDbNB8tHct5eHgm', 'A', 'What is the name of your first school?', 'A', 'Who is your favorite teacher?', 'B', 'What is the name of your hometown', 'C', 'M');
INSERT INTO `smart-shop`.`user` (`us_id`, `us_first_name`, `us_last_name`, `us_age`, `us_gender`, `us_contact`, `us_password`, `us_status`, `us_secret_question_1`, `us_secret_answer_1`, `us_secret_question_2`, `us_secret_answer_2`, `us_secret_question_3`, `us_secret_answer_3`, `us_ro_id`)
VALUES ('mgr1', 'Shop', 'Manager', '20', 'F', '1234567890', '$2y$10$rtKgYrFaR22GMGtNbmNI8eUwmWzWi/KBNysNA9hDbNB8tHct5eHgm', 'A', 'What is the name of your first school?', 'A', 'Who is your favorite teacher?', 'B', 'What is the name of your hometown', 'C', 'M');
INSERT INTO `smart-shop`.`user` (`us_id`, `us_first_name`, `us_last_name`, `us_age`, `us_gender`, `us_contact`, `us_password`, `us_status`, `us_secret_question_1`, `us_secret_answer_1`, `us_secret_question_2`, `us_secret_answer_2`, `us_secret_question_3`, `us_secret_answer_3`, `us_ro_id`)
VALUES ('adm', 'Admin', 'Test', '20', 'F', '1234567890', '$2y$10$rtKgYrFaR22GMGtNbmNI8eUwmWzWi/KBNysNA9hDbNB8tHct5eHgm', 'A', 'What is the name of your first school?', 'A', 'Who is your favorite teacher?', 'B', 'What is the name of your hometown', 'C', 'A');
INSERT INTO `smart-shop`.`user` (`us_id`, `us_first_name`, `us_last_name`, `us_age`, `us_gender`, `us_contact`, `us_password`, `us_status`, `us_secret_question_1`, `us_secret_answer_1`, `us_secret_question_2`, `us_secret_answer_2`, `us_secret_question_3`, `us_secret_answer_3`, `us_ro_id`)
VALUES ('usr', 'Super', 'User', '20', 'M', '1234567890', '$2y$10$rtKgYrFaR22GMGtNbmNI8eUwmWzWi/KBNysNA9hDbNB8tHct5eHgm', 'A', 'What is the name of your first school?', 'A', 'Who is your favorite teacher?', 'B', 'What is the name of your hometown', 'C', 'U');

-- category table
INSERT INTO `smart-shop`.`category` (`ca_id`, `ca_name`) VALUES ('1', 'Electronics');
INSERT INTO `smart-shop`.`category` (`ca_id`, `ca_name`) VALUES ('2', 'Households');
INSERT INTO `smart-shop`.`category` (`ca_id`, `ca_name`) VALUES ('3', 'Utensils');
INSERT INTO `smart-shop`.`category` (`ca_id`, `ca_name`) VALUES ('4', 'Grocery');
INSERT INTO `smart-shop`.`category` (`ca_id`, `ca_name`) VALUES ('5', 'Computers');
INSERT INTO `smart-shop`.`category` (`ca_id`, `ca_name`) VALUES ('6', 'Hardware');



INSERT INTO `smart-shop`.`secret_question` (`id`, `sq_question`) VALUES ('1', 'What is the name of your first school?');
INSERT INTO `smart-shop`.`secret_question` (`id`, `sq_question`) VALUES ('2', 'What is the name of your first pet?');
INSERT INTO `smart-shop`.`secret_question` (`id`, `sq_question`) VALUES ('3', 'What is the maiden name of your mother?');
INSERT INTO `smart-shop`.`secret_question` (`id`, `sq_question`) VALUES ('4', 'Who is your favorite teacher?');
INSERT INTO `smart-shop`.`secret_question` (`id`, `sq_question`) VALUES ('5', 'What is the name of your hometown');


INSERT INTO `smart-shop`.`product` (`pr_code`,`pr_name`,`pr_brand`,`pr_quantity_type`,`pr_rate`,`pr_stock_count`,`pr_add_date`,`pr_aisle`,`pr_shelf`,`pr_date_of_manufacture`,`pr_date_of_expiry`,`pr_image`,`pr_ca_id`) 
VALUES ('p1', 'Speaker','BOAT','PIECE','1000','5','2018-08-09','1','1','2017-07-07','2020-12-09','img','1');
INSERT INTO `smart-shop`.`product` (`pr_code`,`pr_name`,`pr_brand`,`pr_quantity_type`,`pr_rate`,`pr_stock_count`,`pr_add_date`,`pr_aisle`,`pr_shelf`,`pr_date_of_manufacture`,`pr_date_of_expiry`,`pr_image`,`pr_ca_id`) 
VALUES ('p2', 'Headphone','BOSE','PIECE','1000','5','2018-08-09','1','1','2017-07-07','2020-12-09','img',2);
INSERT INTO `smart-shop`.`product` (`pr_code`,`pr_name`,`pr_brand`,`pr_quantity_type`,`pr_rate`,`pr_stock_count`,`pr_add_date`,`pr_aisle`,`pr_shelf`,`pr_date_of_manufacture`,`pr_date_of_expiry`,`pr_image`,`pr_ca_id`) 
VALUES ('p3', 'Speaker','BOAT','PIECE','1000','5','2018-08-09','1','1','2017-07-07','2020-12-09','img',5);
INSERT INTO `smart-shop`.`product` (`pr_code`,`pr_name`,`pr_brand`,`pr_quantity_type`,`pr_rate`,`pr_stock_count`,`pr_add_date`,`pr_aisle`,`pr_shelf`,`pr_date_of_manufacture`,`pr_date_of_expiry`,`pr_image`,`pr_ca_id`) 
VALUES ('p4', 'Speaker','BOAT','PIECE','1000','5','2018-08-09','1','1','2017-07-07','2020-12-09','img',4);
INSERT INTO `smart-shop`.`product` (`pr_code`,`pr_name`,`pr_brand`,`pr_quantity_type`,`pr_rate`,`pr_stock_count`,`pr_add_date`,`pr_aisle`,`pr_shelf`,`pr_date_of_manufacture`,`pr_date_of_expiry`,`pr_image`,`pr_ca_id`) 
VALUES ('p6', 'Speaker','BOAT','PIECE','1000','5','2018-08-09','1','1','2017-07-07','2020-12-09','img',6);
INSERT INTO `smart-shop`.`product` (`pr_code`,`pr_name`,`pr_brand`,`pr_quantity_type`,`pr_rate`,`pr_stock_count`,`pr_add_date`,`pr_aisle`,`pr_shelf`,`pr_date_of_manufacture`,`pr_date_of_expiry`,`pr_image`,`pr_ca_id`) 
VALUES ('p7', 'Speaker','BOAT','PIECE','1000','5','2018-08-09','1','1','2017-07-07','2020-12-09','img',4);
INSERT INTO `smart-shop`.`product` (`pr_code`,`pr_name`,`pr_brand`,`pr_quantity_type`,`pr_rate`,`pr_stock_count`,`pr_add_date`,`pr_aisle`,`pr_shelf`,`pr_date_of_manufacture`,`pr_date_of_expiry`,`pr_image`,`pr_ca_id`) 
VALUES ('p5', 'Speaker','BOAT','PIECE','1000','5','2018-08-09','1','1','2017-07-07','2020-12-09','img',1);


INSERT INTO `smart-shop`.`offer` (`of_id`, `of_date`, `of_discounted_rate`, `of_offer`, `of_pr_code`) VALUES ('1', '2018-09-05', '500', 'offer', 'p1');
INSERT INTO `smart-shop`.`offer` (`of_id`, `of_date`, `of_discounted_rate`, `of_offer`, `of_pr_code`) VALUES ('2', '2019-12-10', '540', 'offer', 'p1');
INSERT INTO `smart-shop`.`offer` (`of_id`, `of_date`, `of_discounted_rate`, `of_offer`, `of_pr_code`) VALUES ('3', '2019-12-11', '540', 'offer', 'p1');
INSERT INTO `smart-shop`.`offer` (`of_id`, `of_date`, `of_discounted_rate`, `of_offer`, `of_pr_code`) VALUES ('4', '2019-12-11', '540', 'offer', 'p2');
INSERT INTO `smart-shop`.`offer` (`of_id`, `of_date`, `of_discounted_rate`, `of_offer`, `of_pr_code`) VALUES ('5', '2019-12-11', '540', 'offer', 'p3');
INSERT INTO `smart-shop`.`offer` (`of_id`, `of_date`, `of_discounted_rate`, `of_offer`, `of_pr_code`) VALUES ('6', '2019-12-12', '540', 'offer', 'p1');
INSERT INTO `smart-shop`.`offer` (`of_id`, `of_date`, `of_discounted_rate`, `of_offer`, `of_pr_code`) VALUES ('7', '2019-12-12', '540', 'offer', 'p2');
INSERT INTO `smart-shop`.`offer` (`of_id`, `of_date`, `of_discounted_rate`, `of_offer`, `of_pr_code`) VALUES ('8', '2019-12-12', '540', 'offer', 'p3');
INSERT INTO `smart-shop`.`offer` (`of_id`, `of_date`, `of_discounted_rate`, `of_offer`, `of_pr_code`) VALUES ('9', '2019-12-17', '540', 'offer', 'p3');

INSERT INTO `smart-shop`.`feedback` (`fe_id`, `fe_question_1`, `fe_question_2`, `fe_question_3`, `fe_question_4`, `fe_question_5`, `fe_question_6`, `fe_question_7`, `fe_question_8`, `fe_question_9`, `fe_question_10`) 
VALUES ('1', 'Did you like the quality of our products?', 'How was your experience?', 'Could we fulfill your requirements?', 'Did you face any issues?', 'Was it easy to locate the products?',
 'Was it easy to navigate the website?', 'Were the product details accurately provided?', 'Did you like the deals offered?', 'Were the recommendations useful?', 'How can we improve?');
INSERT INTO `smart-shop`.`feedback` (`fe_id`, `fe_question_1`, `fe_question_2`, `fe_question_3`, `fe_question_4`, `fe_question_5`, `fe_question_6`, `fe_question_7`, `fe_question_8`, `fe_question_9`, `fe_question_10`) 
VALUES ('2', 'How was your experience?', 'Was it easy to navigate the website?', 'Did you like the quality of our products?', 'Did you face any issues?', 'Was it easy to locate the products?',
'Were the product details accurately provided?', 'Did you like the deals offered?', 'Could we fulfill your requirements?', 'Were the recommendations useful?', 'How can we improve?');
INSERT INTO `smart-shop`.`feedback` (`fe_id`, `fe_question_1`, `fe_question_2`, `fe_question_3`, `fe_question_4`, `fe_question_5`, `fe_question_6`, `fe_question_7`, `fe_question_8`, `fe_question_9`, `fe_question_10`) 
VALUES ('3', 'Was it easy to navigate the website?', 'Did you like the quality of our products?', 'Were the product details accurately provided?', 'Did you like the deals offered?', 'How was your experience?',
 'Did you face any issues?', 'Was it easy to locate the products?', 'Were the recommendations useful?', 'Could we fulfill your requirements?', 'How can we improve?');

select * from category;
select * from user;
select * from product;
select * from offer;
 
 
select * from feedback;
select * from user_feedback;
