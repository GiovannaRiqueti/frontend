import React from "react";
import { withRouter } from "react-router";
import Conclusion from "../presentational/Conclusion";
import CONSTANTS from "../../config/constants";
import { getItem, STORAGE_KEYS } from "../../utils/storage";

class ConclusionContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: this.props.location.state.profile,
      profileResult: undefined
    };
  }

  componentDidMount() {
    const profile = this.getProfileData();

    this.setState({ profileResult: profile }, () => {
      const userData = getItem(STORAGE_KEYS.APP_LOGGED_USER);
      if (!userData) return;
      fetch(`${CONSTANTS.URL_HOST}/exams/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          profile: profile,
          email: userData.email,
          name: userData.name
        })
      })
        .then(res => {
          return res.json();
        })
        .then(resJson => {})
        .catch(err => {});
    });
  }

  getProfileData() {
    switch (this.state.profile) {
      case "ESTP":
        return {
          title: "ESTP",
          description: `O ESTP é uma pessoa voltada para a ação. Quando alguém como você está presente, as coisas começam a acontecer. As luzes se acendem, a música começa a tocar e o jogo começa. O ESTP é realizador(a) excepcional, diplomata internacional, conciliador(a) e negociador(a) por excelência. Se apenas um adjetivo precisasse ser usado para descrevê-lo(a), seria “desbravador(a)”. \n Ao redor do ESTP, a vida não é monótona. Seu estilo atraente, amigável, com certo ambiente teatral, faz com que a rotina comum se torne algo excitante. Socialmente sofisticado(a), suave e exímio(a) manejador(a) do ambiente externo. Sensível para perceber as motivações das pessoas e até um pouco hiper-sensitivo(a) às sutilezas que os outros não conseguem perceber. Perito(a) em usar essa capacidade de observação para “vender ao cliente”. Normalmente, seus olhos não estão nos olhos de seu interlocutor, pois as suas ações estão sempre dirigidas ao auditório. Engraçado(a), esperto(a), divertido(a) e agudamente consciente dos mínimos sinais das outras pessoas, encontrando-se sempre alguns passos à frente, antecipando a posição dos demais. O ESTP usa as informações obtidas para os fins que tem em mente, aparentemente, com “nervos de aço”, envolvendo-se até no que parece ser, para os outros, “a beira do abismo”. Os outros podem achar isso desgastante, mas para você é excitante trabalhar “à beira do abismo”. Pragmático(a) e intransigente, o ESTP frequentemente usa os fins para justificar os meios, que acha necessários (lamentáveis, porém necessários). Normalmente, entretanto, não se preocupa em justificar suas ações, preferindo passar rapidamente para a próxima.`
        };
      case "ISFP":
        return {
          title: "ISFP",
          description: `Pessoas ISFP têm tendência a ser artesãs por natureza, se realmente se dedicarem a isso. Beethoven, Toscanini, Rembrandt e Nijinski, como foi demonstrado por pesquisas, tinham esse perfil. São características raras de serem observadas e, por isso, podem ser mal entendidas.\nUma das maiores causas de incompreensão é a tendência do ISFP a não se expressar diretamente, mas por meio da ação. Se você encontrar um meio de expressão, alguma forma de arte, então seu caráter aparece por esse meio; se não, suas características não aparecem com facilidade.\nO ISFP vive o momento, o mais elegantemente possível. Não costuma planejar nem preparar. A imersão em sua arte não é preparação para algo posterior, mas sim viver intensamente o agora. Você não espera, porque esperar é ver o próprio impulso murchar e morrer. Por ser arrebatado por qualquer ação, você não pensa em fadiga, dor ou perigo. Não é tanto porque esteja habituado(a), mas se entrega de tal modo à ação, que, simplesmente, não a percebe. O ISFP é competente e tem a capacidade de fazer bem as coisas, sob as mais variadas circunstâncias. Essa habilidade especial pode ser chamada de “concretização artesanal”. É um talento completamente diferente dos encontrados em outros tipos psicológicos. De alguma forma, essa concretização artesanal coloca você em contato mais próximo com o verdadeiramente real. É afinado(a) com a cor, a linha, a textura, o toque de sombra e o movimento, enxergando e escutando em harmonia. Os seus sentidos parecem mais afinados do que os das outras pessoas.`
        };
      case "ESFP":
        return {
          title: "ESFP",
          description: `O ESFP normalmente é caloroso e otimista, e transmite isso as pessoas. É desembaraçado(a), espirituoso(a), charmoso(a), esperto(a), volúvel e aberto(a) ao ambiente. É muito divertido estar com pessoas com seu perfil, pois você tende a ser generoso(a) e agradável. “Artista” seria a melhor palavra para descrever você.\nNormalmente o ESFP evita estar sozinho(a), procurando a companhia de outros sempre que lhe for possível. Encontra companhia com facilidade, porque os outros em geral se divertem bastante em sua presença. Gosta de excitação e de criar, onde quer que esteja. Sua alegria de viver é “contagiosa” e geralmente você está de cara alegre. Tem gracejos fáceis e divertidos. Tem certo ar sofisticado e provavelmente se vestirá na moda, exibindo e desfrutando de todas as coisas boas da vida: roupas, comidas, conforto físico e boas oportunidades de divertimento. Onde quer que o ESFP esteja, cria um clima de “comer, beber e divertir-se” e ao seu redor a vida pode ter uma atmosfera constante de festa e alegria.`
        };
      case "ISTP":
        return {
          title: "ISTP",
          description: `O ISTP é impulsivo(a), livre e ao mesmo tempo costuma ser bastante fraterno(a). Sua vida é uma constante ação empreendedora e essa ação é ainda mais gratificante quando vem de um impulso e não de forma planejada. Seus atos são dirigidos e comandados, contendo seus próprios imperativos, e, portanto, não podem estar subordinados a simples regras, regulamentos ou leis.\nO ISTP pode ser extremamente leal àqueles em quem confia, mas pode também ser bastante insubordinado(a), vendo a hierarquia como uma autoridade desnecessária e até supérflua. Não é apenas o fato de ir contra os regulamentos, mas simplesmente, ignorá-los. O ISTP faz as coisas livremente e gosta de variar constantemente. Orgulha-se de sua habilidade de fazer o próximo movimento de forma habilidosa. Geralmente não tem medo e arrisca-se mais do que qualquer outro tipo, podendo ferir-se com mais freqüência.\nLuta pelo que é excitante, todos os dias, na forma de ações rápidas: corridas e mergulho, por exemplo. Essa tendência para a ação torna-o(a) mais sujeito(a) a chateações do que os outros, na procura de algo que o(a) faça agir mais rápido. Estranhamente, entretanto, não se chateia enquanto faz alguma coisa, mesmo quando há longos períodos em que nada acontece, como por exemplo, durante viagens, caçando ou pescando.`
        };
      case "ISTJ":
        return {
          title: "ISTJ",
          description: `O ISTJ se caracteriza por ser firme em assuntos práticos e por sua atração por instituições e, se apenas um adjetivo tivesse que ser escolhido para descrevê-lo, seria confiável.\nPara o ISTJ uma palavra dada é um compromisso. Em casa e no trabalho, tende a ser quieto(a) e sério(a), assim como perseverante e confiável. A ideia de desonrar um compromisso deixa você perplexo(a). Pode-se contar com você para se manter os recursos da instituição a que serve e para levar suas atividades a um plano prático. O ISTJ faz suas obrigações sem rodeios ou alardes, o que pode fazer com que seu trabalho, eventualmente, não seja valorizado pelos outros.\nSeu interesse na solidez, em detalhes, na justiça, em procedimentos práticos, e sua capacidade normalmente tranquila para lidar com pessoas podem levar você a ocupações em que essas preferências são úteis. Por exemplo: Auditoria, Contabilidade, Perícia, Direito e Engenharia. O ISTJ também não tende a arriscar-se em demasia.`
        };
      case "ESTJ":
        return {
          title: "ESTJ",
          description: `O ESTJ tende a estar freqüentemente em contato com o seu mundo exterior. Conhece muito bem o seu meio e geralmente é seu pilar de força e de energia. O melhor adjetivo para descrever o ESTJ é: Responsável. Você deve destacar-se na organização de procedimentos e no detalhamento de regras e regulamentos.\nGosta de ver as coisas feitas corretamente e tende a ser impaciente com aqueles que não levam avante os processos, com a devida atenção aos detalhes, principalmente aqueles recomendados por pessoas com mais experiência e que sabem fazer com que a tarefa seja realizada corretamente.\nO ESTJ sente-se confortável ao avaliar as pessoas e tende a julgar como o indivíduo se sai em seu desempenho operacional. Pode, eventualmente, demonstrar certa rudeza com aqueles que não seguem as regras corretamente.\nO ESTJ é realista, prático e curioso. Curiosidade se refere mais a novos objetos ou processos do que a conceitos e teorias profundas.`
        };
      case "ESFJ":
        return {
          title: "ESFJ",
          description: `O ESFJ é um dos mais sociáveis que existem. Carrega-se de energia ao interagir com as pessoas, tendendo a idealizar tudo ou todos que admira. Harmonia é a palavra-chave para o ESFJ.\nO ESFJ é um(a) grande “nutridor(a)” de instituições, como o lar, a escola, a igreja e os grupos cívicos. Onde quer que esteja, promove a harmonia nos relacionamentos. Gosta de estar com pessoas. É capaz de chamá-las pelo nome, mesmo depois de uma única apresentação. Nas reuniões sociais, pode ser visto(a) cuidando dos­ problemas dos outros, procurando certificar-se de que todos estejam à vontade e participando. Os laços sociais são importantes para o ESFJ e sua conversa deriva para o nostálgico, contando lembranças do passado. Desenvolve, mantém e observa cuidadosamente as tradições.\nO ESFJ sente-se ferido(a) diante da indiferença alheia e tem necessidade de ser apreciado(a), tanto por si mesmo(a) como por tudo o que oferece aos outros, especialmente sob a forma de serviços. Preza as aparências e leva muito a sério as opiniões dos outros. Para o ESFJ, os valores podem tomar a forma de “deve/não deve” e podem ser expressos livremente. Consciente e ordenado(a), pode ficar inquieto(a) quando isolado(a) das pessoas. Na seleção de uma ocupação, você pode inclinar-se para os serviços sociais. Tem uma personalidade aberta. Pode ser, por exemplo, um(a) bom(boa) vendedor(a) e vencer, invariavelmente, concursos de venda. É bom(boa) para liderança de grupos de vendas de uma organização. Se for observado(a) trabalhando, pode-se notar como você personaliza uma venda: o cliente não está comprando o produto, está “comprando você”. Essa mesma característica faz com que possa alcançar sucesso no ensino, na supervisão, na administração e nos trabalhos de pessoa a pessoa, em geral.`
        };
      case "ISFJ":
        return {
          title: "ISFJ",
          description: `Para o ISFJ, o maior desejo é o de ajudar as pessoas. O ISFJ possui boa memória dos acontecimentos e relacionamentos passados. Dá valor às tradições e à conservação das origens. Acredita que o trabalho é bom e que o lazer deve ser merecido. Gosta de trabalhar horas seguidas e, quando assume uma tarefa, é certo que ela vai ser cumprida. Pessoas como você dificilmente questionam a eficácia de um método estabelecido. Normas ditadas por um manual são leis. Se outros violam ou ignoram essas normas padronizadas, você pode ficar contrariado(a) e irritado(a). Habitualmente, tal irritação é voltada para seu interior e pode ser sentida como cansaço ou tensão muscular.\nO ISFJ é confiável. Sua necessidade maior de prestar serviço aos outros normalmente o(a) encaminha para ocupações como Enfermagem, Ensino, Secretariado e Medicina (especialmente Clínica Geral). O ISFJ relaciona-se bem com as pessoas que precisam dele, por exemplo os doentes, os alunos e o “chefe”. Fica muito satisfeito(a) quando está cuidando dos problemas alheios e presta sua ajuda. Eventualmente, quando a pessoa já não precisa mais de você, o relacionamento pode mudar de caráter, desinteressando-o(a). Gosta também de assistir aos oprimidos e pode ajudar mais do que os outros ajudariam. O ISFJ consegue dar conta de rotinas e processos repetitivos. Especulações e teorias não despertam sua curiosidade, pois você prefere deixar as coisas menos práticas para outros.`
        };
      case "INFJ":
        return {
          title: "INFJ",
          description: `O INFJ tende a focalizar as possibilidades, pensar em termos de valores. Tem uma extraordinária vontade de contribuir para o bem-estar dos outros e gosta de ajudar seus semelhantes. O INFJ tem uma personalidade forte, pode, às vezes, ser visto(a) como uma pessoa ‘complicada’, mas que lida facilmente com assuntos e pessoas complexas. Você tem boa visão dos acontecimentos humanos, passados, presentes e futuros. Se uma pessoa demonstra habilidade para compreender os fenômenos psíquicos melhor que os outros, essa pessoa provavelmente é você. Caracteristicamente tem fortes habilidades empáticas e pode estar consciente das emoções e intenções de outras pessoas, antes de elas mesmas terem consciência. o INFJ pode intuir o bem ou o mal nos outros, embora, raramente possa dizer como o fez.\nRealizador(a) que exibe uma criatividade não ostensiva, o INFJ leva o seu trabalho seriamente e gosta de atividades acadêmicas. Pode demonstrar ser super-perfeccionista e dar mais de si numa tarefa do que seria justificável pela natureza da mesma. Geralmente o INFJ não é um(a) líder aparente, mas estará sempre exercendo sua influência “nos bastidores”. Tem uma vida íntima extremamente rica, mas é reservado(a) e não costuma dividir suas emoções, exceto com aqueles em quem confia. Por sua facilidade de se introverter, pode ser ferido(a) facilmente pelos outros. Os que conhecem você há muito tempo podem ver sempre facetas surpreendentes. É bastante constante e valoriza sua integridade, mas tem personalidade complexa que, às vezes, até a si mesmo(a) surpreende.`
        };
      case "ENFJ":
        return {
          title: "ENFJ",
          description: `O ENFJ é um(a) extraordinário(a) líder, tanto em grupos de tarefas rotineiras como em grupos de desenvolvimento de projetos. O ENFJ Tem como característica acreditar que será seguido(a), não duvidando que as pessoas farão o que ele sugere. E, por possuir um carisma raro, é com freqüência seguido(a). Por estar sempre disposto(a) a cooperar, valoriza a cooperação dos outros.\nColoca as pessoas como sendo da maior importância e prioridade. Como resultado, o ENFJ pode acabar se achando responsável pelos sentimentos dos outros, de tal maneira que pode tornar a relação um fardo.\nO ENFJ transmite carinho, interesse e disposição para se envolver e, por isso, as pessoas tendem a buscar o seu apoio. Algumas vezes, entretanto, esse tipo de demanda pode pressioná-lo(a) e você poderá achar que não tem tanto talento para suportar esse tipo de situação. Parece não ser capaz de evitar essas demandas, mesmo quando elas se tornam inadequadas. Ou, quando é forçado(a) a deixar passar o problema pela simples falta de tempo ou energia, sente-se culpado(a) ao extremo.`
        };
      case "ENFP":
        return {
          title: "ENFP",
          description: `Nada ocorre sem que haja um significado para o ENFP, que tem excelente percepção das motivações de outras pessoas. Isso lhe dá um talento para enxergar a vida como um desafio emocionante, cheio de possibilidades. O ENFP tem grande influência sobre os outros, devido ao seu alto impacto pessoal. Procura o autêntico e tende a agir espontaneamente. O ENFP pode considerar como vitais as experiências emocionais intensas. Assim, quando as têm, pode sentir-se desconfortável pela sensação de estar presente apenas pela metade. O ENFP luta pela conveniência, mas sente-se sempre, correndo o perigo de perder seus próprios sentimentos. Exercita um constante filtrar do ambiente externo e nada lhe passa despercebido. É observador(a) atento(a) e capaz de grande concentração no outro indivíduo, sem perder a percepção do que ocorre ao seu redor.\nSua atenção nunca é passiva ou casual. Algumas vezes o ENFP pega-se interpretando os acontecimentos em termos de “motivos ocultos”, dando um sentido especial às palavras ou ações. Essas interpretações tendem a ser, algumas vezes, negativas. Ao mesmo tempo em que você é brilhantemente perceptivo(a), pode vir a cometer erros sérios em seus julgamentos, o que contribui para o seu desconforto. Esses erros derivam da sua tendência a focar dados que confirmem as suas próprias premissas. O ENFP pode estar absolutamente certo(a) nas premissas, mas completamente errado(a) em suas conclusões.`
        };
      case "INFP":
        return {
          title: "INFP",
          description: `O INFP é uma pessoa calma e agradável diante dos outros, eventualmente percebido(a) como tendo certa timidez. Embora demonstre essa atitude mais reservada diante dos outros, por dentro você é tudo, menos distante. O INFP tem uma capacidade de querer bem que não é encontrada nos outros tipos. Quer, profunda e apaixonadamente, manter relacionamentos saudáveis com determinadas pessoas ou mesmo causas. Uma palavra que capta bem seu tipo é “idealista”.\nTem como consequência de seus valores internos, um profundo senso de honra. O INFP é príncipe ou princesa da mitologia, o(a) campeão(ã) dos reis, defensor(a) da fé e guardião(ã) do castelo. Para entender você é preciso entender suas causas, pois você é capaz de fazer sacrifícios incomuns por alguém ou algo em que acredita. Você busca a unidade em sua vida, de corpo, de espírito, emoções e intelecto. Geralmente, tem um motivo sutil percorrendo sua vida, mas os outros raramente detectam esta característica íntima. O comprometimento do INFP com o que é correto faz com que esteja sempre alerta ao negativo. Prefere dar mais importância aos processos de valor do que à lógica pura. Responde com o belo contra o feio, com o bem contra o mal e com o moral contra o imoral. Você tem talento para interpretar símbolos da mesma forma como os cria. Assim, geralmente o INFP redige de forma lírica. Tem tendência a tomar liberdade com a lógica; vê a lógica como algo opcional.`
        };
      case "INTP":
        return {
          title: "INTP",
          description: `Você é preciso(a) em planejamento e linguagem, tendendo a identificar imediatamente inconsistências. Tem grande poder de concentração e boa memória. A palavra que resume seu estilo único é “arquiteto(a)”. Arquiteto(a) de idéias e sistemas, tanto quanto arquiteto(a) de edifícios. Detecta contradições nas afirmações, por mais distantes que estejam no espaço e no tempo. É inteligente, isto é, busca o que tem importância e o que possa dizer respeito aos assuntos em questão. Assim, tem boa capacidade de concentração.\nA autoridade que vem do cargo ou da posição não costuma impressioná-lo(a). Para você, só conclusões lógicas e coerentes têm peso. A autoridade externa por si é irrelevante. Detesta redundância e incoerência. Como tem desejo de entender o Universo, está sempre observando as leis naturais. Você preza a inteligência, em si mesmo(a) e nos outros, mas pode vir a ser intelectual amador(a) como resultado de sua necessidade de amontoar idéias, princípios ou compreensão do comportamento. Nunca se esquece do que aprendeu, podendo ficar obcecado(a) pela análise. Quando arrebatado(a) por um processo de pensamento, parece que esse processo tem um querer próprio, o que faz com que você fique nele até compreender a questão em toda a sua complexidade. Pode esbanjar intelectualidade ou demonstrar impaciência com outros menos dotados dessa característica. Isso pode produzir alguma hostilidade e comportamentos de defesa por parte dos outros, que podem vir a descrevê-lo(a) como arrogante.`
        };
      case "INTJ":
        return {
          title: "INTJ",
          description: `O INTJ é bastante autoconfiante e possui perfeita noção de sua própria capacidade. Vive uma realidade introspectiva, focalizando as possibilidades, utilizando o pensamento de forma lógica e empírica, preferindo que os eventos e as pessoas sirvam a um uso positivo.\nAs decisões surgem naturalmente para o INTJ. Uma vez tomada uma decisão, você se sente mais sossegado(a). Olha mais para o futuro do que para o passado e a palavra que capta sua essência é “construtor(a)”. Um(a) construtor(a) de sistemas e aplicador(a) de modelos teóricos. Para o INTJ a autoridade baseada em posição, hierarquia, título ou posição não tem qualquer força. Você não se curva à mágica dos Slogans. Se uma ideia ou posição faz sentido para você, será adotada; se não fizer, não será, independentemente de quem tomou a posição ou gerou a ideia. É um Brainstormer natural, estando sempre aberto(a) a novos conceitos e, de fato, buscando-os agressivamente. É visto(a) como uma pessoa pragmática, que olha a realidade como algo absolutamente arbitrário, inventado, e que pode ser usado como uma ferramenta.`
        };
      case "ENTJ":
        return {
          title: "ENTJ",
          description: `É característica do ENTJ comandar. Sua força e necessidade básica estão em liderar e, provavelmente, desde cedo pode ser observado(a) assumindo grupos. O ENTJ oferece estrutura às pessoas, envolvendo-as nos objetivos. Seu pensamento empírico, objetivo e extrovertido pode ser altamente desenvolvido. Se este for o caso, pode fazer uso da classificação, da generalização, da sumarização, da adoção de evidências e da demonstração com facilidade. Estabelece planos para uma tarefa, empreendimento ou organização. No entanto, o ENTJ se interessa mais pelas políticas, objetivos e controles do que pelos regulamentos, procedimentos e normas.\nO ENTJ é tolerante com procedimentos estabelecidos, mas pode abandonar qualquer procedimento quando ele demonstra estar distante da meta a que aparentemente serve. A ineficiência é especialmente rejeitada por você e a repetição de erros causa-lhe impaciência.\nPara você sempre deve haver uma razão para fazer qualquer coisa e o sentimento das pessoas, por vezes, não é razão suficiente. Caso o ENTJ seja responsável por uma organização, visualiza (e geralmente tem a habilidade para fazê-lo) para onde ela está indo e é capaz de comunicar essa visão aos outros. O ENTJ é um(a) construtor(a) nato(a) de organizações e não pode deixar de liderar. Por vezes encontra-se, inesperadamente, no comando de algo e pode até ficar surpreso(a) com isso. Como administrador(a) organiza suas unidades em sistemas, planejando com antecedência, mantendo tanto os objetivos de curto como de longo prazo firmes em sua mente. Busca e pode ver a eficiência numa equipe. Prefere decisões baseadas em dados impessoais, trabalhando com planos bem pensados. Gosta de usar operações mecanizadas. Prefere que os outros o(a) sigam.`
        };
      case "ENTP":
        return {
          title: "ENTP",
          description: `O ENTP tende a usar a imaginação com os relacionamentos sociais, com a mesma facilidade que tem para fazer relações conceituais, físicas e mecânicas. Está muito atento(a) aos acontecimentos e às possibilidades.\nENTP s tendem a se dedicar a muitas coisas ao mesmo tempo e por isso são fáceis de agradar. Por outro lado, ENTP s podem ser relutantes para fazer as tarefas de uma forma padronizada. Caracteristicamente está sempre buscando um jeito melhor, sempre pensando em novos projetos, novas atividades e novos processos.\nO ENTP deve ser bom(boa) em análise, especialmente em análise funcional e se diverte com as atividades complexas. Habitualmente entusiasmado(a), consegue manifestar interesse por tudo e por isso é uma fonte de inspiração para os outros que se sentem arrebatados por seu entusiasmo. Tem confiança no valor de suas buscas e exibe uma particular capacidade de ignorar o que é padronizado, tradicional e autoritário. Como conseqüência dessa atitude aberta, muitas vezes dá uma guinada vigorosa em seu trabalho e em sua vida.\nO ENTP considera o projeto como um meio; o fim é a invenção que funciona, o protótipo que pode ser reproduzido. As ideias só têm valor quando tornam possíveis as ações. “Isso não pode ser feito” é um desafio para você e provoca uma reação de “eu posso fazer isso”. Sua crença está em sua habilidade de improvisar e exibir um talento raro para dar sentido a uma situação. Seu foco está na competência e na sensação de poder que ela dá mais do que no sentimento de liberdade de ação. Pode usar táticas de debate, mesmo quando os “opositores” são grandes amigos. Sabe dar valor à adaptabilidade e à inovação e por isso responde de forma rápida e adequada aos altos e baixos dos outros.`
        };
      default:
        return {
          title: "Sem nada",
          description:
            "Felipe da esse desconto para a gente. Juro que funcionava."
        };
    }
  }
  render() {
    return <Conclusion profileData={this.state.profileResult} />;
  }
}

export default withRouter(ConclusionContainer);
