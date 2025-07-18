import styles from './header.module.css';
import { FiSearch } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Banner from './assets/img/allanamakeup.png';
import Logo from './assets/img/logo.png'; 

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      {/* Barra superior com informação de frete grátis */}
      <div className={styles.topBar}>
        <p>BEM VINDO AO SITE!</p>
      </div>

      {/* Cabeçalho principal com logo, busca e ícone de atendimento */}
      <div className={styles.mainHeader}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo Mundo Make-up" />
        </div>

        <div className={styles.searchBox}>
          <input type="text" placeholder="O que você está buscando?" />
          <button><FiSearch size={18} /></button>
        </div>

        <div className={styles.actions}>
          <a
            href="https://wa.me/5574999958969"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionItem}
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <FaWhatsapp size={20} />
            Atendimento
          </a>
        </div>
      </div>

      {/* Navegação */}
      <nav className={styles.navbar}>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="https://wa.me/5574999958969">Contato</a></li>
        </ul>
      </nav>

      {/* Banner principal */}
      <div className={styles.banner}>
        <img src={Banner} alt="Banner promocional" />
      </div>
    </header>
  );
};

export default Header;
