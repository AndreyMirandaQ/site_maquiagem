import styles from './footer.module.css';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Coluna 1 - Departamentos */}
        <div className={styles.coluna}>
          <h3>Departamentos</h3>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 2 - Contato */}
        <div className={styles.coluna}>
          <h3>Entre em contato</h3>
          <ul className={styles.contato}>
            <li><FaWhatsapp /> (74) 99995-8969</li>
            <li><FaPhone /> (74) 99995-8969</li>
            <li><FaMapMarkerAlt /> Rua Da Paz 53, Central-BA, Bahia, Brazil 44940-000</li>
          </ul>
        </div>

        {/* Coluna 3 - Redes sociais */}
        <div className={styles.coluna}>
          <h3>Permaneça conectado</h3>
          <div className={styles.redesSociais}>
            <a
              href="https://www.instagram.com/loja_allanamakeup/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.redeBotao}
            >
              <FaInstagram className={styles.redeIcone} />
            </a>
            <a
              href="https://wa.me/5574999958969"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.redeBotao}
            >
              <FaWhatsapp className={styles.redeIcone} />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className={styles.direitos}>
        <p>Copyright Allana Makeup - 2025. Todos os direitos reservados.</p>
        <p className={styles.credito}>
          criado por <strong>Dropstar Digital</strong>{' '}
          <a
            href="https://www.instagram.com/dropstardigital"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.redeInline}
            aria-label="Instagram Dropstar"
          >
            <FaInstagram />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
