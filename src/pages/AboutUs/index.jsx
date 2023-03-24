import CardGrid from '../../components/CardGrid';
import PersonCard from '../../components/PersonCard';
import VacancyCard from '../../components/VacancyCard';
import './styles.css'
import SvgVet from '../../assets/icons/vet.svg';
import SvgCont from '../../assets/icons/cont.svg';
import SvgMark from '../../assets/icons/mark.svg';
import SvgSocial from '../../assets/icons/social.svg';
import SvgRh from '../../assets/icons/rh.svg';

const AboutUs = () => {

  const people = [{
    name: 'Founder Person',
    signature: "As a human, I find animals very interesting. What with them not being human and all. I'm totally not one of 'em though, I promise.",
    pictureUrl: 'http://placekitten.com/200/200',
  }, {
    name: 'Co-Founder Person',
    signature: "Sometimes I look at my cat, and I wonder who is who's master.Yes, that is a very human thought, isn't it?",
    pictureUrl: 'http://placekitten.com/201/201',
  }, {
    name: 'Volunteer Person',
    signature: "I mean, I'm more of a dog person, but cats have it worse, especially black cats around friday thirteens. So i just decided to help out every nyow and then.",
    pictureUrl: 'http://placekitten.com/202/202',
  }, {
    name: 'Anonymous Donator Person',
    signature: "Once myself my cat tasted bougee cat food for the first time, me he knew he wanted others to have that wonderful experience as well. Thats why I donated lots of human money and wet food to UFSCat. We can trust them to treat felines well.",
    pictureUrl: 'http://placekitten.com/203/203',
  }];

  const vacancies = [{
    name: 'Veterinário',
    description: 'Alguém que preze pela sáude dos pets! Buscamos confianca e disponibilidade de tratar nossos bichinhos mesmo se não pudermos pagar as consultas imediatamente. A saúde dos felinos não espera termos verba! ',
    intervalStart: '08:00',
    intervalEnd: '18:00',
    icon: SvgVet,
  },
  {
    name: 'Contador',
    description: 'Precisamos de algúem que contabilize nossos gastos e organize nossas financas! ',
    intervalStart: '13:00',
    intervalEnd: '19:00',
    icon: SvgCont,
  },
  {
    name: 'Marketing',
    description: 'Primeiras impressões são as que ficam! Se você é formado em Marketing e quer causar impactos positivos socialmente, envie seu currículo! ',
    intervalStart: '08:00',
    intervalEnd: '16:00',
    icon: SvgMark,
  },
  {
    name: 'Social Media',
    description: 'Em conjunto com a equipe de Marketing, você será responsável por gerenciar a presenca digital de nossa ONG e propagar nossa missão! ',
    intervalStart: '14:00',
    intervalEnd: '22:00',
    icon: SvgSocial,
  },
  {
    name: 'Recursos Humanos',
    description: 'Todo estabelecimento em que pessoas trabalham precisa de RH (né?) ',
    intervalStart: '09:00',
    intervalEnd: '17:00',
    icon: SvgRh,
  }]

  return (
    <>
      <main>
        <h1 className="section-title">
          Sobre a UFSCat
        </h1>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
          pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
          ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
          cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
          eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
          ullamco ut ea consectetur et est culpa et culpa duis.
        </p>
      </main>

      <section>
        <h2 className="section-title">
          Equipe
        </h2>
        <CardGrid>
          {people.map((person) => (
            <PersonCard {...person} key={person.name} />
          ))}
        </CardGrid>
      </section>

      <section>
        <h2 className="section-title">
          Precisamos de voluntários!
        </h2>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
          pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
          ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
          cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
          eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
          ullamco ut ea consectetur et est culpa et culpa duis.
        </p>
      </section>

      <section>
        <CardGrid>
          {vacancies.map((vacancy) => (
            <VacancyCard {...vacancy} key={vacancy.name} />
          ))}
        </CardGrid>
      </section>
    </>

  )

}

export default AboutUs;
