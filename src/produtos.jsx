import styles from './produtos.module.css';
import { useState } from 'react';
import img1 from './assets/img/img1.jpg';
import img2 from './assets/img/img2.jpg';
import img3 from './assets/img/img3.jpg';
import img4 from './assets/img/img4.jpg';
import img5 from './assets/img/img5.jpg';
import img6 from './assets/img/img6.jpg';
import img7 from './assets/img/img7.jpg';
import img8 from './assets/img/img8.jpg';
import img9 from './assets/img/img9.jpg';
import img10 from './assets/img/img10.jpg';
import img11 from './assets/img/img11.jpg';
import img12 from './assets/img/img12.jpg';
import img13 from './assets/img/img13.jpg';
import img14 from './assets/img/img14.jpg';
import img15 from './assets/img/img15.jpg';
import img16 from './assets/img/img16.jpg';
import img17 from './assets/img/img17.jpg';
import img18 from './assets/img/img18.jpg';
import img19 from './assets/img/img19.jpg';
import img20 from './assets/img/img20.jpg';
import img21 from './assets/img/img21.jpg';
import img22 from './assets/img/img22.jpg';
import img23 from './assets/img/img23.jpg';
import img24 from './assets/img/img24.jpg';
import img25 from './assets/img/img25.jpg';
import img26 from './assets/img/img26.jpg';
import img27 from './assets/img/img27.jpg';
import img28 from './assets/img/img28.jpg';

// Lista de produtos
const produtos = [
  {
    id: 1,
    nome: "Água Micelar Matte",
    preco: "R$11,99",
    parcela: "",
    imagem: img1,
    desconto: null,
    precoOriginal: null
  },
  {
    id: 2,
    nome: "Água Micelar Colágeno",
    preco: "R$11,99",
    parcela: "",
    imagem: img2,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 3,
    nome: "Água Micelar antioleosidade Dia",
    preco: "R$11,99",
    parcela: "",
    imagem: img3,
    desconto: null,
    precoOriginal: null
  },
  {
    id: 4,
    nome: "Bruma Matte",
    preco: "R$11,99",
    parcela: "",
    imagem: img4,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 5,
    nome: "Sabonete Facial Mousse Micelar Morango",
    preco: "R$14,99",
    parcela: "",
    imagem: img5,
    desconto: null,
    precoOriginal: null
  },
  {
    id: 6,
    nome: "Sabonete Facial Mousse Micelar Uva",
    preco: "R$14,99",
    parcela: "",
    imagem: img6,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 7,
    nome: "Hidratante Facial Rosa Mosqueta",
    preco: "R$11,99",
    parcela: "",
    imagem: img7,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 8,
    nome: "Primer Matte",
    preco: "R$11,99",
    parcela: "",
    imagem: img8,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 9,
    nome: "Sérum Facial Redutor De Poros",
    preco: "R$11,99",
    parcela: "",
    imagem: img9,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 10,
    nome: "Máscara Fácial Vitamina C",
    preco: "R$9,99",
    parcela: "",
    imagem: img10,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 11,
    nome: "Primer Siliconado Acabamento Aveludado",
    preco: "R$9,99",
    parcela: "",
    imagem: img11,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 12,
    nome: "Primer",
    preco: "R$11,99",
    parcela: "",
    imagem: img12,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 13,
    nome: "Blindagem",
    preco: "R$14,99",
    parcela: "",
    imagem: img13,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 14,
    nome: "Body Splash",
    preco: "R$14,99",
    parcela: "",
    imagem: img14,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 15,
    nome: "Água Termal",
    preco: "R$9,99",
    parcela: "",
    imagem: img15,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 16,
    nome: "Sabonete Facial e Corporal",
    preco: "R$11,99",
    parcela: "",
    imagem: img16,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 17,
    nome: "Toalhas Umedecidas Demaquilante com Colágeno",
    preco: "R$11,99",
    parcela: "",
    imagem: img17,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 18,
    nome: "Toalhas Umedecidas para Limpeza Facial com Água Micelar",
    preco: "R$11,99",
    parcela: "",
    imagem: img18,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 19,
    nome: "Máscara para Lábios / Hidratante",
    preco: "R$9,99",
    parcela: "",
    imagem: img19,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 20,
    nome: "Sabonete Facial Antioleosidade",
    preco: "R$9,99",
    parcela: "",
    imagem: img20,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 21,
    nome: "Sabonete Facial Ácido Salicílico",
    preco: "R$9,99",
    parcela: "",
    imagem: img21,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 22,
    nome: "Gel Esfoliante Pedras Vulcânicas",
    preco: "R$9,99",
    parcela: "",
    imagem: img22,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 23,
    nome: "Sabonete Facial Rosa Mosqueta",
    preco: "R$9,99",
    parcela: "",
    imagem: img23,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 24,
    nome: "OIL FREE Sabonete Facial Antioleosidade",
    preco: "R$9,99",
    parcela: "",
    imagem: img24,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 25,
    nome: "Batom em Bala - Batom Cintilante",
    preco: "R$11,99",
    parcela: "",
    imagem: img25,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 26,
    nome: "Lápis de Sobrancelha",
    preco: "R$9,99",
    parcela: "",
    imagem: img26,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 27,
    nome: "Lip Gloss Glitter",
    preco: "R$11,99",
    parcela: "",
    imagem: img27,
    desconto: "",
    precoOriginal: ""
  },
  {
    id: 28,
    nome: "Curte Gloss Glitter Infantil",
    preco: "R$11,99",
    parcela: "",
    imagem: img28,
    desconto: "",
    precoOriginal: ""
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