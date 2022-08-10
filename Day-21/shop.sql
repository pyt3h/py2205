-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 20, 2022 at 05:16 PM
-- Server version: 8.0.28-0ubuntu0.20.04.3
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` bigint NOT NULL,
  `parent_id` bigint DEFAULT NULL,
  `code` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `parent_id`, `code`, `name`) VALUES
(2, NULL, '01', 'Điện máy'),
(3, 2, '0101', 'Laptop'),
(4, 2, '0102', 'Điện thoại di động'),
(5, NULL, '02', 'Hàng tiêu dùng'),
(6, 5, '0201', 'Bát đĩa, cốc chén'),
(7, 5, '0202', 'Bột giặt');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` bigint NOT NULL,
  `phone` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `phone`, `name`, `address`) VALUES
(1, '0123456789', 'Nguyễn Văn A', 'Hà Nội'),
(2, '0123456780', 'Nguyễn Văn B', 'TP HCM'),
(3, '032321456', 'Nguyễn Thị C', 'Đà Nẵng');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` bigint NOT NULL,
  `category_id` bigint NOT NULL,
  `code` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int NOT NULL,
  `image_url` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `category_id`, `code`, `name`, `price`, `image_url`) VALUES
(1, 3, 'ACER_001', 'Acer 001', 6500000, 'https://raw.githubusercontent.com/pytutorial/django_shop_spa/main/backend/static/images/ACER_0001.jpg'),
(2, 3, 'ACER_002', 'Acer 002', 8500000, 'https://raw.githubusercontent.com/pytutorial/django_shop_spa/main/backend/static/images/ACER_0002.jpg'),
(3, 3, 'ASUS_001', 'Asus 001', 8000000, 'https://raw.githubusercontent.com/pytutorial/django_shop_spa/main/backend/static/images/ASUS_0001.jpg'),
(4, 3, 'ASUS_002', 'Asus 002', 10000000, 'https://raw.githubusercontent.com/pytutorial/django_shop_spa/main/backend/static/images/ASUS_0002.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sale_order`
--

CREATE TABLE `sale_order` (
  `id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  `customer_id` bigint NOT NULL,
  `qty` int NOT NULL,
  `price_unit` int NOT NULL,
  `total` int NOT NULL,
  `order_date` datetime NOT NULL,
  `status` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `sale_order`
--

INSERT INTO `sale_order` (`id`, `product_id`, `customer_id`, `qty`, `price_unit`, `total`, `order_date`, `status`) VALUES
(1, 1, 1, 1, 6500000, 6500000, '2022-04-20 17:04:42', 1),
(2, 4, 2, 2, 10000000, 20000000, '2022-04-20 17:05:18', 0),
(3, 1, 3, 1, 6500000, 6500000, '2022-04-20 17:06:30', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_parent_id_fk` (`parent_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_category_id` (`category_id`);

--
-- Indexes for table `sale_order`
--
ALTER TABLE `sale_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sale_order_product_id` (`product_id`),
  ADD KEY `sale_order_customer_id` (`customer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sale_order`
--
ALTER TABLE `sale_order`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_parent_id_fk` FOREIGN KEY (`parent_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `sale_order`
--
ALTER TABLE `sale_order`
  ADD CONSTRAINT `sale_order_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `sale_order_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
