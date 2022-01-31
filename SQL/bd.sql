-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31-Jan-2022 às 22:22
-- Versão do servidor: 10.4.18-MariaDB
-- versão do PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `leads`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `leads`
--

CREATE TABLE `leads` (
  `leads_id` int(11) NOT NULL,
  `leads_zona` varchar(100) NOT NULL,
  `leads_bairro` varchar(100) NOT NULL,
  `leads_empresa` varchar(100) NOT NULL,
  `leads_cnpj` varchar(100) NOT NULL,
  `leads_contato` varchar(100) NOT NULL,
  `leads_email` varchar(100) NOT NULL,
  `leads_cargo` varchar(100) NOT NULL,
  `leads_telefone` varchar(100) NOT NULL,
  `leads_sistema` varchar(100) NOT NULL,
  `leads_market` varchar(100) NOT NULL,
  `leads_observacao` varchar(100) NOT NULL,
  `leads_data` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `leads`
--

INSERT INTO `leads` (`leads_id`, `leads_zona`, `leads_bairro`, `leads_empresa`, `leads_cnpj`, `leads_contato`, `leads_email`, `leads_cargo`, `leads_telefone`, `leads_sistema`, `leads_market`, `leads_observacao`, `leads_data`) VALUES
(17, 'zn', 'Cidade de Deus', 'GSTI', '00482555255222', '92999999999999', 'luizfernandoluck@gmail.com', 'desenvolvedor', '92999999', 'SISTEMA ATUAL', 'EMPRESA DE MARKETING ATUAL', 'OBSERVAÇÕES', '28/01/2022'),
(70, 'zl', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(71, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(72, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(73, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(74, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(75, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(76, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(77, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(78, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(79, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(80, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(81, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(82, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(83, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(84, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(85, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(86, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(87, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(88, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(89, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(90, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(91, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(92, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(93, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(94, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(95, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(96, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(97, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(98, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(99, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(100, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(101, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(102, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(103, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(104, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(105, '', '', '', '', '', '', '', '', '', '', '', '28/01/2022'),
(106, '', '', '', '', '', '', '', '', '', '', '', '31/01/2022'),
(107, '', '', '', '', '', '', '', '', '', '', '', '31/01/2022'),
(108, '', '', '', '', '', '', '', '', '', '', '', '31/01/2022'),
(109, '', '', '', '', '', '', '', '', '', '', '', '31/01/2022'),
(110, '', '', '', '', '', '', '', '', '', '', '', '31/01/2022'),
(111, 'zn', '', '', '', '', '', '', '', '', '', '', '31/01/2022'),
(112, '', '', '', '', '', '', '', '', '', '', '', '31/01/2022'),
(113, '', '', '', '', '', '', '', '', '', '', '', '31/01/2022'),
(114, 'zn', '', '', '', '', '', '', '', '', '', '', '31/01/2022'),
(115, 'zn', '', '', '', '', '', '', '', '', '', '', '31/01/2022'),
(116, '', '', '', '', '', '', '', '', '', '', '', '31/01/2022'),
(117, 'zcs', '', 'Alex Mota mercadorias', '00000000000000000000000000000', '096', 'alexmotajornalismo@gmail.com', 'Faxineiro', '69487', 'Não ', '', '', '31/01/2022'),
(118, '', '', '', '', '', '', '', '', '', '', '', '31/01/2022'),
(119, '', '', '', '', '', '', '', '', '', '', '', '31/01/2022'),
(120, '', '', '', '', '', '', '', '', '', '', '', '31/01/2022');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `user_id` int(11) NOT NULL,
  `user_nome` varchar(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_telefone` varchar(14) NOT NULL,
  `user_senha` varchar(255) NOT NULL,
  `user_cep` varchar(8) NOT NULL,
  `user_uf` varchar(2) NOT NULL,
  `user_endereco` varchar(255) NOT NULL,
  `user_cidade` varchar(100) NOT NULL,
  `user_bairro` varchar(255) NOT NULL,
  `user_funcao` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`user_id`, `user_nome`, `user_email`, `user_telefone`, `user_senha`, `user_cep`, `user_uf`, `user_endereco`, `user_cidade`, `user_bairro`, `user_funcao`) VALUES
(17, 'Luiz Fernando Pinagé Coutinho', 'luiz.c@progride.com.br', '92999999', '$2b$10$aR32JV/uFRPvS25Jd3AwJOlzrH4/ScKyXVOO6WWNJo3GZb6lVopxq', '49087560', 'SE', 'Rua São Jorge', 'Aracaju', 'Santos Dumont', 'ADMINISTRATIVO'),
(18, '', '', '', '$2b$10$8sbiJiHguANsWdkSbsO7Qe2dyMC3lDruSIDuRTaHSrKf/X5rAzkym', '', '', '', '', '', ''),
(19, 'aa', 'luiz.c@progride.com.brr', '92999999', '$2b$10$qdkt5EbqVlbwZKr5z22fNOBNMH4KhKIcWxtG2OTTge5ZfHGDEJ3Gy', '49087560', 'SE', 'Rua São Jorge', 'Aracaju', 'Santos Dumont', 'ADMINISTRATIVO'),
(20, 'luiz fernando fernandopinage', 'luiz.c@progride.com.brccc', '92999999', '$2b$10$MOVgSLrQyxcZgAwepCx0neQl.BZtyE.P.n8vRVGdf.VI.u/Gyega6', '49087560', 'SE', 'Rua São Jorge', 'Aracaju', 'Santos Dumont', 'ADMINISTRATIVO'),
(21, 'luiz fernando fernandopinage', 'luiz.c@progride.com.brgggggg', '92999999', '$2b$10$PhcoNPkXyfGTm4XZTe.pCeAN66J9NP9/M0IISQjFilabjnhSn3F9y', '49087560', 'SE', 'Rua São Jorge', 'Aracaju', 'Santos Dumont', 'ADMINISTRATIVO');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `leads`
--
ALTER TABLE `leads`
  ADD PRIMARY KEY (`leads_id`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `leads`
--
ALTER TABLE `leads`
  MODIFY `leads_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
