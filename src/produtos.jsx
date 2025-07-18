import styles from './produtos.module.css';
import { useState } from 'react';
import Batom from './assets/img/batom.jpg';
import Mel from './assets/img/mel.png';

// Lista de produtos
const produtos = [
  {
    id: 1,
    nome: "Delineador em Gel BlackEyes by Maria Catarina - Catharine Hill",
    preco: "R$54,99",
    parcela: "12x de R$5,32",
    imagem: Mel,
    desconto: null,
    precoOriginal: null
  },
  {
    id: 2,
    nome: "KIT FRAN GLOSSLICIOUS BY FRANCINY EHLKE",
    preco: "R$139,99",
    parcela: "12x de R$13,54",
    imagem: Batom,
    desconto: "22%",
    precoOriginal: "R$179,99"
  },
  {
    id: 3,
    nome: "Delineador em Gel BlackEyes by Maria Catarina - Catharine Hill",
    preco: "R$54,99",
    parcela: "12x de R$5,32",
    imagem: Mel,
    desconto: null,
    precoOriginal: null
  },
  {
    id: 4,
    nome: "KIT FRAN GLOSSLICIOUS BY FRANCINY EHLKE",
    preco: "R$139,99",
    parcela: "12x de R$13,54",
    imagem: Batom,
    desconto: "22%",
    precoOriginal: "R$179,99"
  },
  {
    id: 5,
    nome: "Delineador em Gel BlackEyes by Maria Catarina - Catharine Hill",
    preco: "R$54,99",
    parcela: "12x de R$5,32",
    imagem: Mel,
    desconto: null,
    precoOriginal: null
  },
  {
    id: 6,
    nome: "KIT FRAN GLOSSLICIOUS BY FRANCINY EHLKE",
    preco: "R$139,99",
    parcela: "12x de R$13,54",
    imagem: Batom,
    desconto: "22%",
    precoOriginal: "R$179,99"
  },
  {
    id: 7,
    nome: "KIT FRAN GLOSSLICIOUS BY FRANCINY EHLKE",
    preco: "R$139,99",
    parcela: "12x de R$13,54",
    imagem: Batom,
    desconto: "22%",
    precoOriginal: "R$179,99"
  },
  {
    id: 8,
    nome: "KIT FRAN GLOSSLICIOUS BY FRANCINY EHLKE",
    preco: "R$139,99",
    parcela: "12x de R$13,54",
    imagem: Batom,
    desconto: "22%",
    precoOriginal: "R$179,99"
  },
];

const Produtos = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const abrirModal = (produto) => {
    setProdutoSelecionado(produto);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProdutoSelecionado(null);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Os mais vendidos</h2>
      <div className={styles.grid}>
        {produtos.map(produto => (
          <div
            key={produto.id}
            className={styles.card}
            onClick={() => abrirModal(produto)}
          >
            {produto.desconto && (
              <span className={styles.desconto}>{produto.desconto} OFF</span>
            )}
            <img src={produto.imagem} alt={produto.nome} className={styles.imagem} />
            <div className={styles.linhaSeparadora}></div>
            <div className={styles.info}>
              <p className={styles.nome}>{produto.nome}</p>
              <div className={styles.precos}>
                {produto.precoOriginal && (
                  <span className={styles.precoOriginal}>{produto.precoOriginal}</span>
                )}
                <span className={styles.preco}>{produto.preco}</span>
              </div>
              <span className={styles.parcela}>{produto.parcela}</span>

              {/* Botão WhatsApp no card */}
              <a
                className={styles.botaoWhatsAppCard}
                href={`https://wa.me/5574999958969?text=Olá! Gostaria de saber mais sobre: ${produto.nome}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Falar no WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalAberto && produtoSelecionado && (
        <div className={styles.modalOverlay} onClick={fecharModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.fecharModal} onClick={fecharModal}>×</button>
            <img src={produtoSelecionado.imagem} alt={produtoSelecionado.nome} />
            <h3>{produtoSelecionado.nome}</h3>
            <p className={styles.precoModal}>{produtoSelecionado.preco}</p>
            <p className={styles.parcelaModal}>{produtoSelecionado.parcela}</p>
            <a
              className={styles.botaoWhatsApp}
              href={`https://wa.me/5574999958969?text=Olá! Gostaria de saber mais sobre: ${produtoSelecionado.nome}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Produtos;