import TepeyacPainting from '../assets/MountTepeyacPainting.jpg';
import BasilicaBg from '../assets/BasilicaBackgroundImage.avif';
import OurLadyImage from '../assets/OurLadyImageAyate.webp';
import RosesImg from '../assets/OurLadyStatuePhotos.jpeg';
import UncleImg from '../assets/YSJDBracelet.jpeg';
import MiracleImg from '../assets/novenaGuadalupanaLogo.jpeg';

export interface StoryStep {
  id: number;
  title: string;
  text: string;
  image: string;
}

export const storySteps: StoryStep[] = [
  {
    id: 1,
    title: 'El Encuentro en el Tepeyac',
    text: 'El 9 de diciembre de 1531, Juan Diego subía el cerro del Tepeyac cuando escuchó una voz suave que lo llamaba por su nombre: “Juanito, Juan Dieguito”. Allí vio a la Santísima Virgen María, vestida de sol y resplandeciente, quien le pidió que fuera al obispo para solicitar la construcción de un templo en ese lugar.',
    image: TepeyacPainting,
  },
  {
    id: 2,
    title: 'La Primera Visita al Obispo',
    text: 'Juan Diego acudió de inmediato ante fray Juan de Zumárraga para transmitir el mensaje. El obispo, sin embargo, no le creyó y le pidió una señal que demostrara la autenticidad de la aparición.',
    image: BasilicaBg,
  },
  {
    id: 3,
    title: 'El Encargo de la Señal',
    text: 'De regreso al cerro, la Virgen escuchó la respuesta del obispo y le pidió a Juan Diego que regresara al día siguiente para recibir la señal solicitada. Con gran humildad, el vidente aceptó la tarea.',
    image: OurLadyImage,
  },
  {
    id: 4,
    title: 'La Enfermedad del Tío Juan Bernardino',
    text: 'La noche del 11 de diciembre, el tío de Juan Diego cayó gravemente enfermo. Al día siguiente, en busca de un sacerdote, Juan Diego intentó evitar el Tepeyac, pero la Virgen se le apareció de nuevo, consolándolo y asegurando la curación de su tío.',
    image: UncleImg,
  },
  {
    id: 5,
    title: 'Las Rosas de Castilla',
    text: 'Como señal, la Virgen le indicó cortar rosas de Castilla —imposibles de hallar en invierno— y llevarlas en su tilma al obispo. Juan Diego obedeció y las recogió milagrosamente en la cima del cerro.',
    image: RosesImg,
  },
  {
    id: 6,
    title: 'La Milagrosa Imagen',
    text: 'El 12 de diciembre de 1531, Juan Diego desplegó su tilma ante el obispo; las rosas cayeron al suelo y apareció impresa la imagen de la Virgen de Guadalupe. Conmovido, el obispo aceptó construir el templo solicitado.',
    image: MiracleImg,
  },
]; 