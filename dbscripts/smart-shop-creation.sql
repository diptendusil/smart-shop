-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

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
  `us_contact` INT(10) NOT NULL,
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
-- Table `smart-shop`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart-shop`.`product` (
  `pr_code` VARCHAR(50) NOT NULL,
  `pr_name` VARCHAR(50) NOT NULL,
  `pr_type` INT(2) NOT NULL,
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
  PRIMARY KEY (`pr_code`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smart-shop`.`offer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart-shop`.`offer` (
  `of_id` INT NOT NULL AUTO_INCREMENT,
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


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
