-- MySQL Script generated by MySQL Workbench
-- Fri Dec  6 17:53:54 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema smart-shop
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `smart-shop` ;

-- -----------------------------------------------------
-- Schema smart-shop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `smart-shop` DEFAULT CHARACTER SET utf8 ;
USE `smart-shop` ;

-- -----------------------------------------------------
-- Table `smart-shop`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart-shop`.`role` (
  `ro_id` VARCHAR(1) NOT NULL,
  `ro_name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`ro_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smart-shop`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart-shop`.`user` (
  `us_id` VARCHAR(15) NOT NULL,
  `us_first_name` VARCHAR(50) NOT NULL,
  `us_last_name` VARCHAR(50) NOT NULL,
  `us_age` INT NOT NULL,
  `us_gender` VARCHAR(1) NOT NULL,
  `us_contact` BIGINT(11) NOT NULL,
  `us_password` VARCHAR(255) NOT NULL,
  `us_status` VARCHAR(1) NOT NULL,
  `us_secret_question_1` VARCHAR(50) NOT NULL,
  `us_secret_answer_1` VARCHAR(50) NOT NULL,
  `us_secret_question_2` VARCHAR(50) NOT NULL,
  `us_secret_answer_2` VARCHAR(50) NOT NULL,
  `us_secret_question_3` VARCHAR(50) NOT NULL,
  `us_secret_answer_3` VARCHAR(50) NOT NULL,
  `us_ro_id` VARCHAR(1) NOT NULL,
  PRIMARY KEY (`us_id`),
  INDEX `fk_user_role_idx` (`us_ro_id` ASC),
  CONSTRAINT `fk_user_role`
    FOREIGN KEY (`us_ro_id`)
    REFERENCES `smart-shop`.`role` (`ro_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smart-shop`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart-shop`.`category` (
  `ca_id` INT NOT NULL AUTO_INCREMENT,
  `ca_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`ca_id`))
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `smart-shop`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart-shop`.`product` (
  `pr_code` VARCHAR(50) NOT NULL,
  `pr_name` VARCHAR(50) NOT NULL,
  `pr_brand` VARCHAR(50) NOT NULL,
  `pr_quantity_type` VARCHAR(10) NULL,
  `pr_rate` DOUBLE NOT NULL,
  `pr_stock_count` INT NOT NULL,
  `pr_add_date` DATE NOT NULL,
  `pr_aisle` VARCHAR(15) NOT NULL,
  `pr_shelf` VARCHAR(15) NOT NULL,
  `pr_date_of_manufacture` DATE NOT NULL,
  `pr_date_of_expiry` DATE NOT NULL,
  `pr_image` VARCHAR(255) NOT NULL,
  `pr_ca_id` INT NOT NULL,
  PRIMARY KEY (`pr_code`),
  INDEX `fk_product_category1_idx` (`pr_ca_id` ASC),
  CONSTRAINT `fk_product_category1`
    FOREIGN KEY (`pr_ca_id`)
    REFERENCES `smart-shop`.`category` (`ca_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smart-shop`.`offer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart-shop`.`offer` (
  `of_id` INT NOT NULL,
  `of_date` DATE NOT NULL,
  `of_discounted_rate` DOUBLE NOT NULL,
  `of_offer` VARCHAR(50) NOT NULL,
  `of_pr_code` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`of_id`),
  INDEX `fk_offer_product1_idx` (`of_pr_code` ASC),
  CONSTRAINT `fk_offer_product1`
    FOREIGN KEY (`of_pr_code`)
    REFERENCES `smart-shop`.`product` (`pr_code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;





CREATE TABLE `smart-shop`.`bill` (
  `bi_id` INT NOT NULL AUTO_INCREMENT,
  `bi_us_id` VARCHAR(50) NOT NULL,
  `bi_total` double NOT NULL,
  `bi_reward_points` INT NULL,
  `bi_date` DATE NOT NULL,
  PRIMARY KEY (`bi_id`),
  INDEX `bi_us_fk_idx` (`bi_us_id` ASC),
  CONSTRAINT `bi_us_fk`
    FOREIGN KEY (`bi_us_id`)
    REFERENCES `smart-shop`.`user` (`us_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;






CREATE TABLE `smart-shop`.`purchase_item` (
  `pi_id` INT NOT NULL AUTO_INCREMENT,
  `pi_pr_id` VARCHAR(50) NOT NULL,
  `pi_quantity` INT NOT NULL,
  `pi_price` DOUBLE NOT NULL,
  `pi_bi_id` INT NOT NULL,
  PRIMARY KEY (`pi_id`),
  INDEX `pi_pr_fk_idx` (`pi_pr_id` ASC),
  INDEX `pi_bi_fk_idx` (`pi_bi_id` ASC),
  CONSTRAINT `pi_pr_fk`
    FOREIGN KEY (`pi_pr_id`)
    REFERENCES `smart-shop`.`product` (`pr_code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `pi_bi_fk`
    FOREIGN KEY (`pi_bi_id`)
    REFERENCES `smart-shop`.`bill` (`bi_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `smart-shop`.`feedback`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart-shop`.`feedback` (
  `fe_id` INT NOT NULL,
  `fe_question_1` VARCHAR(200) NOT NULL,
  `fe_question_2` VARCHAR(200) NOT NULL,
  `fe_question_3` VARCHAR(200) NOT NULL,
  `fe_question_4` VARCHAR(200) NOT NULL,
  `fe_question_5` VARCHAR(200) NOT NULL,
  `fe_question_6` VARCHAR(200) NOT NULL,
  `fe_question_7` VARCHAR(200) NOT NULL,
  `fe_question_8` VARCHAR(200) NOT NULL,
  `fe_question_9` VARCHAR(200) NOT NULL,
  `fe_question_10` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`fe_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smart-shop`.`user_feedback`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart-shop`.`user_feedback` (
  `uf_rating_1` VARCHAR(200) NOT NULL,
  `uf_rating_2` VARCHAR(200) NOT NULL,
  `uf_rating_3` VARCHAR(200) NOT NULL,
  `uf_rating_4` VARCHAR(200) NOT NULL,
  `uf_rating_5` VARCHAR(200) NOT NULL,
  `uf_rating_6` VARCHAR(200) NOT NULL,
  `uf_rating_7` VARCHAR(200) NOT NULL,
  `uf_rating_8` VARCHAR(200) NOT NULL,
  `uf_rating_9` VARCHAR(200) NOT NULL,
  `uf_rating_10` VARCHAR(200) NOT NULL,
  `uf_fe_id` INT NOT NULL,
  `uf_us_id` VARCHAR(15) NOT NULL,
  `uf_id` INT NOT NULL,
  `uf_date` DATE NOT NULL,
  INDEX `fk_user_feedback_feedback1_idx` (`uf_fe_id` ASC) ,
  INDEX `fk_user_feedback_user1_idx` (`uf_us_id` ASC) ,
  PRIMARY KEY (`uf_id`),
  CONSTRAINT `fk_user_feedback_feedback1`
    FOREIGN KEY (`uf_fe_id`)
    REFERENCES `smart-shop`.`feedback` (`fe_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_feedback_user1`
    FOREIGN KEY (`uf_us_id`)
    REFERENCES `smart-shop`.`user` (`us_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE `smart-shop`.`reward_point` (
  `rp_id` INT NOT NULL AUTO_INCREMENT,
  `rp_us_id` VARCHAR(50) NOT NULL,
  `rp_point` INT NULL,
  PRIMARY KEY (`rp_id`),
  INDEX `rp_us_fk_idx` (`rp_us_id` ASC),
  CONSTRAINT `rp_us_fk`
    FOREIGN KEY (`rp_us_id`)
    REFERENCES `smart-shop`.`user` (`us_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
