import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import "../App.css";

const ProjectPrivacidade = () => {
  const navigate = useNavigate();

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <button
          onClick={() => navigate("/", { state: { scrollToTop: true } })}
          style={{ marginBottom: "1rem" }}
        >
          ← Voltar
        </button>
        <h2>Política de Privacidade</h2>
        <section className="politica-privacidade">
        <h3>1. Âmbito da nossa Política de Privacidade</h3>

        <p>
          A presente política de privacidade abrange este website. A Vila Sá
          respeita a privacidade do Utilizador e processa os seus dados pessoais
          de acordo com as leis em vigor. Os dados não serão processados para
          quaisquer outros fins que não os aqui especificados. A Vila Sá
          reserva-se no direito de atualizar ou modificar a sua Política de
          Privacidade a qualquer momento, nomeadamente, de forma a adaptá-la a
          alterações legislativas.
        </p>

        <h3>2. Para que fins são recolhidos dados pessoais do Utilizador?</h3>
        <p>
          Os dados recolhidos nos formulários do website destinam-se
          exclusivamente ao processamento dos pedidos dos utilizadores, e não
          serão usados para qualquer outro processamento.
        </p>

        <h3>
          3. A equipa da Proteção de Dados utiliza os dados pessoais recolhidos
          para Marketing Direto?
        </h3>
        <p></p>

        <h3></h3>
        <p>
          A Vila Sá não utilizará os seus dados pessoais para lhe enviar
          qualquer correio não solicitado cujo conteúdo não tenha recebido o seu
          consentimento explícito. A equipa da Proteção de Dados não vende nem
          negocia os seus dados com terceiros.
        </p>

        <h3>4. Quem tem acesso aos dados pessoais do Utilizador?</h3>
        <p>
          A Vila Sá não divulga a terceiros quaisquer dados pessoais dos seus
          Clientes e Utilizadores, sem o seu consentimento, exceto quando tal
          for exigido por lei.
        </p>

        <h3>5. Onde são guardados os dados do Utilizador?</h3>
        <p>
          A Vila Sá guarda os dados dos seus clientes e Utilizadores nos seus
          servidores localizados na União Europeia. Estes servidores são
          protegidos e mantidos de acordo com os mais elevados standards de
          segurança e por forma a respeitar as leis de privacidade aplicáveis.
          Caso deseje ser removido da nossa base de dados, poderá exercer esse
          direito, contactando-nos através dos diversos meios disponíveis no
          site.
        </p>

        <h3>
          6. A equipa da Proteção de Dados utiliza cookies no seu Website?
        </h3>
        <p>
          Este website utiliza cookies em determinadas áreas. Os cookies são
          ficheiros que armazenam informações no disco rígido ou browser do
          Utilizador, permitindo que os websites o reconheçam e saibam que já os
          visitou anteriormente. O Utilizador pode configurar o seu browser para
          recusar os cookies, porém nesse caso, o website ou partes do mesmo
          podem não funcionar corretamente. Os cookies são utilizados para
          monitorizar e analisar a utilização do website, permitindo à Vila Sá
          proporcionar a melhor experiência de utilização.
        </p>
        </section>
      </div>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            padding: "10px 15px",
            fontSize: "18px",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            zIndex: 1000,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          ↑ Topo
        </button>
      )}

      <Footer />
    </>
  );
};

export default ProjectPrivacidade;
