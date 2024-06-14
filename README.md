# Projeto - Teacher Vanessa
Este projeto tem como objetivo criar um site para divulgar o trabalho de uma professora particular de inglês e atrair novos alunos. Desenvolvi uma plataforma intuitiva e amigável, onde são apresentados os serviços oferecidos, informações de contato e um 'quiz' didático. A iniciativa surgiu da necessidade de aumentar a visibilidade online da professora e facilitar a conexão com potenciais alunos, oferecendo uma vitrine digital que reflete a qualidade e a metodologia de ensino. Os resultados esperados incluem um aumento no número de consultas e matrículas, bem como uma maior presença digital. Futuras melhorias podem incluir a adição de funcionalidades como agendamento online, pagamentos via plataforma e uma seção de recursos interativos para alunos.

## Funcionalidades

- O aplicativo foi estruturado conforme a [documentação do React](https://pt-br.legacy.reactjs.org/docs/getting-started.html).
- A página inicial contém sessões com informações básicas e links para suas respectivas páginas;
- A página "Quiz" utiliza de hooks de Estado e Efeito e obtém os dados de uma api de terceiros, sua documentação pode ser acessada [aqui](https://the-trivia-api.com/docs/v2/).
- Enquanto os dados estão sendo carregados, um loader estilizado aparece para o usuário;
- Na página de contato também foi utilizada uma api de terceiros para enviar os dados para o email da professora, sua documentação pode ser acessada [aqui](https://formcarry.com/docs/code-examples/fetch);
- O rodapé contem um mapa que utiliza a api do Google Maps, sua documentação pode ser acessadas [aqui](https://developers.google.com/maps/documentation/embed/get-started?hl=pt-br).
- Os hooks Route e Link foram utilizados para navegação entre páginas;

## Stack utilizada

**Front-end:**  HTML, CSS, flexbox, grid, BEM, JavaScript/JSX, Git/Github, Figma, Webpack, NPM, React.

## Screenshots
![Main](https://github.com/vinib96/web_project_around_react/assets/141737376/db5e7571-240f-4b33-aee8-c0bc60ebf167)
![Quiz](https://github.com/vinib96/web_project_around_react/assets/141737376/98276ebb-3d62-4058-b7cc-63f8bb6fd367)
![Contact](https://github.com/vinib96/web_project_around_react/assets/141737376/75addd5e-5c0c-4e29-8c08-f43177edaaa9)


## Demonstração

Você pode acessar o site [aqui](https://teachervanessa.netlify.app/).


## Apêndice

- O desgin foi livremente baseado neste [Figma](https://www.figma.com/design/hj2RHEcuRUMvzbEa0PR0LE/Teachers-Courses-(Community)?node-id=0-1&t=unvI4nIwMvJa6cPU-0) públco;
- A logomarca foi criada com o [Adobre Firefly](https://firefly.adobe.com/?gclid=CjwKCAjw34qzBhBmEiwAOUQcF4LOmQ67Cxm7LZGeqn7JP-xWQ5qqg5R2lS1_dnbW4lLzU-zabH_15hoC60kQAvD_BwE&sdid=JM4FW6VL&mv=search&mv2=paidsearch&ef_id=CjwKCAjw34qzBhBmEiwAOUQcF4LOmQ67Cxm7LZGeqn7JP-xWQ5qqg5R2lS1_dnbW4lLzU-zabH_15hoC60kQAvD_BwE:G:s&s_kwcid=AL!3085!3!665654623096!e!!g!!adobe%20firefly!20372408557!150845642869&gad_source=1) utilizando inteligência artificial;
- As animações dos botões foram baseadas no seguinte [site](https://www.brasilcode.com.br/35-botoes-css-com-animacao/) e adaptadas;
- As imagens utilizadas foram obtidas de bancos de dados gratuitos.
