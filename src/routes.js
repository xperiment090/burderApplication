import FeedContainer from './component/Feeds';
import ImprintContainer from './component/Imprint';


const routes = [{
    id: "feed",
    component: FeedContainer,
    name: "Feed",
    path: "/"
    },
    {
    id: "imprint",
    component: ImprintContainer,
    name: "Imprit",
    path: "/imprint"
}]

export default routes;