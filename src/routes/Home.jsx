import { } from 'react'
import laptop from '../assets/medico-laptop.jpg'
import acessibilidade from '../assets/medica-cadeirante.jpg'
import consultas from '../assets/medico-paciente.jpg'
import problema from '../assets/detecção-problema.jpg'


function Home() {
    return (
        <>
            <div className='Home'>
                <main>
                    <img src={laptop} alt="medico no laptop" className="main_img" />
                    <section className="main_info">
                        <h1 className='main-title'>Refazendo o Caminho da Saúde</h1>
                        <p>
                        TechCare: Inovação e cuidado personalizado, integrando-se para promover uma vida mais saudável e conectada. Transformamos o cuidado com a saúde, proporcionando experiências únicas e impactantes para o seu bem-estar.
                        </p>
                    </section>
                    <div className='div-button'>
                        <button className='btn main-button'>Mais informações</button>
                    </div>
                </main>
                <aside>
                    <section className='aside-container'>
                        <article className='aside-item'>
                            <h1>O que é a solução:</h1>
                            <p>A TechCare apresenta uma solução inovadora que funde a expertise em tecnologia com o compromisso com a saúde. Desenvolvemos uma plataforma inteligente que proporciona uma gestão proativa da saúde, utilizando dispositivos de última geração e algoritmos avançados para oferecer um cuidado personalizado e acessível.</p>
                        </article>
                        <hr width='90%' className='aside-separador'></hr>
                        <article className='aside-item'>
                            <h1>O que ela fará:</h1>
                            <p>Nossa plataforma revolucionária visa otimizar a gestão da saúde individual, fornecendo uma abordagem preventiva. A TechCare coleta dados em tempo real, analisando indicadores como padrões de sono, atividade física e biomarcadores relevantes. Com base nesses dados, a plataforma fornece recomendações personalizadas, alertas preventivos e orientações para um estilo de vida mais saudável.</p>
                        </article>
                        <hr width='90%' className='aside-separador'></hr>
                        <article className='aside-item'>
                            <h1>Como funcionará:</h1>
                            <p>A TechCare opera por meio de dispositivos vestíveis conectados à nossa plataforma e um aplicativo intuitivo. Os usuários sincronizam seus dispositivos para permitir a coleta contínua de dados. Algoritmos avançados analisam essas informações, gerando insights personalizados que são acessíveis aos usuários por meio de um painel de controle interativo. Nossa solução oferece uma experiência fácil e eficaz, permitindo a interação direta com profissionais de saúde, se necessário.</p>
                        </article>
                    </section>

                </aside>
            </div>
            <section className="vantagens">
                <h1 className='vantagens-titulo'>Vantagens</h1>
                <div className='cards'>
                    <article className='vantagens-article'>
                        <img src={problema} alt='Detecção de problema de saúde' className='article-img' />
                        <div className='article-div'>
                            <h1 className='vantagens-numero'>01</h1>
                            <h1 className='vantagens-vantagem'>Prevenção Ativa e Personalizada</h1>
                            <p className='vantagem-texto'>Detectamos precocemente problemas de saúde, proporcionando orientações adaptadas a cada usuário.</p>
                        </div>
                    </article>

                    <article className='vantagens-article'>
                        <img src={acessibilidade} alt='Médica cuidando do cadeirante' className='article-img' />
                        <div className='article-div'>
                            <h1 className='vantagens-numero'>02</h1>
                            <h1 className='vantagens-vantagem'>Acessibilidade Universal</h1>
                            <p className='vantagem-texto'>Tornamos o cuidado de saúde de qualidade acessível a todos, oferecendo uma experiência conveniente e eficaz.</p>
                        </div>
                    </article>

                    <article className='vantagens-article'>
                        <img src={consultas} alt='Médico mostrando resultado do exame' className='article-img' />
                        <div className='article-div'>
                            <h1 className='vantagens-numero'>03</h1>
                            <h1 className='vantagens-vantagem'>Integração Colaborativa</h1>
                            <p className='vantagem-texto'>Conectamos usuários a profissionais de saúde, promovendo uma abordagem colaborativa para o bem-estar.</p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Home