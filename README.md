# angular-ds-sandbox

> **Projeto para desenvolvimento de um Design System e boas práticas com Angular 17**

## 📖 Sobre o Projeto

Este repositório foi criado com o objetivo de centralizar o aprendizado contínuo sobre **Angular** e **design systems**, aplicando boas práticas de programação e documentando soluções para desafios enfrentados no dia a dia de desenvolvimento. É um espaço de experimentação e aprendizado, onde componentes reutilizáveis e padrões de design são criados e organizados.

## 🎯 Objetivos

- **Construir um Design System** completo e modular que possa ser utilizado em aplicações futuras, incluindo componentes e estilos que seguem princípios de design consistentes e acessíveis.
- **Aplicar boas práticas** de programação com foco em Angular, melhorando a organização, performance e manutenção do código.
- **Documentar soluções** para desafios comuns e complexos, servindo como um registro de problemas e como foram resolvidos.

## 🚀 Tecnologias Utilizadas

- **Angular 17**: Framework principal para o desenvolvimento de componentes e gestão do ciclo de vida dos dados.
- **TypeScript**: Para tipagem estática e maior controle de erros durante o desenvolvimento.
- **SCSS**: Pré-processador de CSS para organizar e reutilizar estilos.
- **Angular CLI**: Ferramenta para inicialização e gerenciamento de configurações do projeto.
- **Storybook (opcional)**: Para documentar e testar visualmente os componentes do design system.

## 📚 Componentes

Este projeto é focado em componentes reutilizáveis que fazem parte de um design system. Cada componente é documentado e testado para garantir que siga os princípios de **modularidade**, **acessibilidade** e **consistência visual**.

Alguns dos componentes planejados incluem:

- **Botões** com diferentes variações de estilo (primário, secundário, etc.)
- **Modais** para exibir informações e ações do usuário
- **Formulários** reutilizáveis com validações e feedback visual
- **Tabelas e Listagens** interativas
- **Componentes de Navegação** como sidebars e menus dropdown

## 📘 Boas Práticas

Neste projeto, são aplicadas boas práticas de desenvolvimento Angular, incluindo:

- **Injeção de dependência** e **injeção de serviços** para melhorar a modularidade e testabilidade.
- **Uso de Observables e RxJS** para gerenciar eventos e dados assíncronos.
- **Detecção de mudanças e otimização de desempenho** com o uso de `OnPush`.
- **Boas práticas de acessibilidade (a11y)** para garantir que os componentes sejam acessíveis a todos os usuários.
- **Documentação do código** e comentários explicativos para ajudar na compreensão e manutenção do código.

## 📖 Documentação de Desafios

Um dos principais propósitos deste projeto é registrar e documentar os **desafios encontrados** e as soluções implementadas. Abaixo estão alguns exemplos de tópicos abordados:

- **Gerenciamento de estado** para componentes complexos
- **Otimização de performance** com Angular (e.g., lazy loading, trackBy em *ngFor)
- **Estratégias para manipulação de formulários** em Angular, como validação e mensagens de erro dinâmicas
- **Práticas de design responsivo** e suporte a diferentes dispositivos
- **Testes de unidade e integração** para garantir a estabilidade dos componentes

## 💻 Como Executar o Projeto

1. Clone o repositório:
   ~git clone https://github.com/seu-usuario/angular-ds-sandbox.git
   ~cd angular-ds-sandbox
2. Instale as dependências:
  ~npm install
3. Execute o servidor de desenvolvimento:
  ~ng serve

## 📈 Planejamento Futuro

Este projeto está em constante evolução, com novos componentes e funcionalidades sendo adicionados conforme novas tecnologias e práticas são exploradas. Aqui estão alguns pontos planejados para o futuro:

- **Integração com Storybook** para documentar e testar os componentes visualmente.
- **Testes de acessibilidade** automatizados para garantir conformidade com padrões de acessibilidade.
- **Implementação de temas dinâmicos** para fácil customização de cores e estilos.
- **Publicação do Design System** como uma biblioteca Angular que pode ser integrada a outros projetos.
