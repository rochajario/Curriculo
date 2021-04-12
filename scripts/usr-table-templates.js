const tabela_trajetoria_academica= HTMLTemplateElement =
`
<thead>
    <th>Instituição</th>
    <th>Curso</th>
    <th>Conclusão</th>
    <th>Observação</th>
    <th>Ementa</th>
</thead>
<tbody>
    <tr>
        <td><strong>Centro Universitário UNA</strong></td>
        <td>Superior em Análise e Desenvolvimento de Sistemas</td>
        <td>2021/2</td>
        <td>Obtenção de Novo Título</td>
        <td style="font-size: 1.5rem;"><i class="fas fa-graduation-cap ementa-curso"></i></td>
    </tr>
    <tr>
        <td><strong>Centro Universitário de Belo Horizonte - UNIBH</strong></td>
        <td>Superior em Gestão de Tecnologia da Informação</td>
        <td>2017/2</td>
        <td
            <em>"A reitoria do Centro Universitário de Belo Horizonte - UNIBH, <br>no uso de suas atribuições, confere a <strong>JARIO ROCHA DOS SANTOS JUNIOR</strong><br>o título de <strong>destaque acadêmico</strong>, por seu desempenho,<br>entre os formandos do 2° semestre de 2017,<br>como melhor aluno do curso de Gestão de Tecnologia da Informação.<br>
            <br>Belo Horizonte, 20 de Fevereiro de 2018"</em>
        </td>
        <td style="font-size: 1.5rem;"><i class="fas fa-graduation-cap ementa-curso"></i></td>
    </tr>
</tbody>
`;

const tabela_cursos_e_certificados= HTMLTemplateElement =
`
<thead>
    <tr>
        <th colspan='4'>Desenvolvimento de Software</th>
    </tr>
    <tr>
        <th>Plataforma</th>
        <th>Curso</th>
        <th>Status</th>
        <th>Certificado</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><strong>Softblue</strong></td>
        <td>Análise Orientada a Objetos</td>
        <td>Concluído</td>
        <td style="font-size: 1.5rem;"><a href="https://www.softblue.com.br/certificado/5050735F0672" target="_blank"><i class="fas fa-trophy curso-concluido"></i></a></td>
    </tr>
    <tr>
        <td><a href="https://cursos.alura.com.br/user/rochajario/" target="_blank"><strong>Alura</strong></a></td>
        <td>Avançando com Orientação a Objetos com PHP:<br>Herança, Polimorfismo<br>e Interfaces</td>
        <td>Concluído</td>
        <td style="font-size: 1.5rem;"><a href="https://cursos.alura.com.br/user/rochajario/course/php-oo-heranca-polimorfirmo-interfaces/certificate" target="_blank"><i class="fas fa-trophy curso-concluido"></i></a></td>
    </tr>
    <tr>
        <td><a href="https://cursos.alura.com.br/user/rochajario/" target="_blank"><strong>Alura</strong></a></td>
        <td>PHP e TDD:<br>Testes com PHPUnit</td>
        <td>Concluído</td>
        <td style="font-size: 1.5rem;"><a href="https://cursos.alura.com.br/user/rochajario/course/phpunit-tdd/certificate" target="_blank"><i class="fas fa-trophy curso-concluido"></i></a></td>
    </tr>
    <tr>
        <td><a href="https://cursos.alura.com.br/user/rochajario/" target="_blank"><strong>Alura</strong></a></td>
        <td>SOLID com PHP:<br>Princípios da programação<br>orientada a objetos</td>
        <td>Concluído</td>
        <td style="font-size: 1.5rem;"><a href="https://cursos.alura.com.br/user/rochajario/course/solid-php-principios-orientacao-a-objetos/certificate" target="_blank"><i class="fas fa-trophy curso-concluido"></i></a></td>
    </tr>
    <tr>
        <td><a href="https://cursos.alura.com.br/user/rochajario/" target="_blank"><strong>Alura</strong></a></td>
        <td>Design Patterns em PHP:<br>Padrões Comportamentais</td>
        <td>Concluído</td>
        <td style="font-size: 1.5rem;"><a href="https://cursos.alura.com.br/user/rochajario/course/php-design-pattern-comportamental/certificate" target="_blank"><i class="fas fa-trophy curso-concluido"></i></a></td>
    </tr>
    <tr>
        <td><a href="https://cursos.alura.com.br/user/rochajario/" target="_blank"><strong>Alura</strong></a></td>
        <td>Design Patterns em PHP:<br>Padrões Estruturais</td>
        <td>Em Andamento</td>
        <td style="font-size: 1.5rem;"><i class="fas fa-trophy"></i></td>
    </tr>
    <tr>
        <td><a href="https://cursos.alura.com.br/user/rochajario/" target="_blank"><strong>Alura</strong></a></td>
        <td>Algoritmos I:<br>Selection, Insertion<br>e Introdução a Análise</td>
        <td>Em Andamento</td>
        <td style="font-size: 1.5rem;"><i class="fas fa-trophy"></i></td>
    </tr>
    <tr>
        <td><a href="https://www.coursera.org/user/85712959e733c1485e217578a6644e68" target="_blank"><strong>Coursera</strong></a></td>
        <td>Princeton, Algorithms Part 1</td>
        <td>Em Andamento</td>
        <td style="font-size: 1.5rem;"><i class="fas fa-trophy"></i></td>
    </tr>
</tbody>
<thead>
    <tr>
        <th colspan='5'>Outras Tecnologias</th>
    </tr>
    <tr>
        <th>Certificação</th>
        <th>Descrição</th>
        <th>Expiração</th>
        <th>Certificado</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><strong>Cisco CCNA</strong></td>
        <td>Roteamento e Comutação (Redes)</td>
        <td>Fevereiro de 2023</td>
        <td style="font-size: 1.5rem;"><a href="https://www.credly.com/badges/e5aa1e5a-6287-4885-bab0-7df622a6ae31/linked_in_profile" target="_blank"><i class="fas fa-trophy curso-concluido"></i></a></td>
    </tr>
    <tr>
        <td><strong>ITIL Foundation v3</strong></td>
        <td>Boas Práticas em ITSM</td>
        <td>Sem Expiração</td>
        <td style="font-size: 1.5rem;"><a href="https://www.peoplecert.org/for-corporations/certificate-verification-service?CertCheckWebUserControl1$txtCertificate=603799520676232" target="_blank"><i class="fas fa-trophy curso-concluido"></i></a></td>
    </tr>
    <tr>
        <td><strong>Scrum Foundation</strong></td>
        <td>Ciclo de Vida Ágil</td>
        <td>Sem Expiração</td>
        <td style="font-size: 1.5rem;"><a href="https://certiprof.com/" target="_blank"><i class="fas fa-trophy curso-concluido"></i></a></td>
    </tr>
</tbody>
`;

const tabela_objetivo_profissional= HTMLTemplateElement =
`
<tr>
    <td>Desejo ingressar no mercado de Desenvolvimento de Software</td>
</tr>
`;

const tabela_experiencia_profissional= HTMLTemplateElement =
`
<thead>
    <th>Organização</th>
    <th>Período</th>
    <th>Papel</th>
    <th>Principais Atividades</th>
</thead>
<tbody>
    <tr>
        <td><strong>Ânima Educação</strong></td>
        <td>Janeiro de 2020 - Atual</td>
        <td>Analista de Redes</td>
        <td style="text-align: left">Transformando o país pela Educação através de arquiteturas<br>e implementações de projetos de conectividade nas camadas 2 e 3<br> do modeloOSI, Gerenciamento de segurança de borda e cooperação<br>com demais áreasde TI.<br>Suporte a ambientes Cloud e On-Premises.</td>
    </tr>
    <tr>
        <td><strong>Virtual Sistemas<br>e Tecnologia Ltda</strong></td>
        <td>Junho de 2019 - Novembro de 2019</td>
        <td>Administrador<br>de Redes e Segurança</td>
        <td style="text-align: left">Arquitetura e implementação de projetos em Redes e Segurança de Borda.
            <ul>
                <li>Design de Redes de Dados e Voz</li>
                <li>Arquitetura de Alta Disponibilidade nas camadas 2 e 3 do modelo OSI.</li>
                <li> Implantação de firewalls Sophos XG em setup de Alta Disponibilidade.</li>
            </ul>
            Além das atividades citadas performei também atendimento<br>especializado emdemandas relacionadas à SAN,<br>Armazenamento de Dados (Block Storage eNAS), Virtualização (VMWare vSphere), etc.</td>
    </tr>
    <tr>
        <td><strong>IT-One<br>Tecnologia da Informação</strong></td>
        <td>Julho de 2016 - Junho de 2019</td>
        <td>Analista<br>de Infraestrutura</td>
        <td style="text-align: left">Prestação de serviços à infraestrutura de TI de empresas de diversos<br>segmentos de mercado como Indústria, Saúde, Comunicação,<br>Educação etc. em todo o território brasileiro
    </tr>
    <tr>
        <td><strong>IT-One<br>Tecnologia da Informação</strong></td>
        <td>Março de 2016 - Julho de 2016</td>
        <td>Analista<br>de Infraestrutura Trainee</td>
        <td style="text-align: left">Como finalista do programa Students to Business (S2B - 2015) do MicrosoftInnovation Center (PUC Minas) em parceria com a IT-One, recebi o convite para compor seu quadro de estagiários.
        No período desenvolvi atividades como atendimento à tickets internos eapoio à infraestrutura de TI em serviços de rede, Servidores, Virtual Desktop Infrastructure, Virtualização, Acompanhamento em projetos, etc.

    </tr>
</tbody>
`;
const tabela_portifolio= HTMLTemplateElement =
`
<table>
    <thead>
        <th>Projeto</th>
        <th style="text-align:center">Acesso</th>
    </thead>
    <tbody>
        <tr>
            <td>Special Care</td>
            <td style="font-size: 1.5rem;text-align:center"><i class="fas fa-user-md"></i></td>
        </tr>
        <tr>
            <td>Lista de Desejos</td>
            <td style="font-size: 1.5rem;text-align:center"><i class="fas fa-cart-arrow-down"></i></td>
        </tr>
    </tbody>
</table>
`;
