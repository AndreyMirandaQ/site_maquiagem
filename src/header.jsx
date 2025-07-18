import { useEffect, useState } from 'react';
import styles from './header.module.css';
import { FiSearch } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Banner from './assets/img/allanamakeup.png';
import BannerMobile from './assets/img/allanamobile.png';
import Logo from './assets/img/logo.png';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função para verificar largura da tela
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Executa uma vez ao carregar
    window.addEventListener('resize', handleResize); // Atualiza ao redimensionar

    return () => window.removeEventListener('resize', handleResize); // Limpa o listener
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.topBar}>
        <p>RUA DA PAZ 53, CENTRAL-BA, BAHIA, 44940-000</p>
      </div>

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

      <nav className={styles.navbar}>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="https://wa.me/5574999958969">Contato</a></li>
        </ul>
      </nav>

      {/* Renderiza apenas UM banner com base no tamanho da tela */}
      <div className={styles.banner}>
        <img
          src={isMobile ? BannerMobile : Banner}
          alt="Banner promocional"
        />
      </div>
    </header>
  );
};

export default Header;