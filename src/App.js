import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Stickers from "./pages/Stickers";
import About from "./pages/About";
import Doodles from "./pages/Doodles";
import Web from "./pages/Web";
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import WorkCP from "./pages/WorkCP";
import WorkMW from "./pages/WorkMW";
import WorkAD from "./pages/WorkAD";

const App = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Landing} />
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About}/>
                <Route path="/web" exact component = {Web} />
                <Route path="/doodles" exact component = {Doodles} />
                <Route path="/stickers" exact component = {Stickers} />
                <Route path="/web/cafepekoe" exact component = {WorkCP} />
                <Route path="/web/moonwave" exact component = {WorkMW} />
                <Route path="/web/anniesdiary" exact component = {WorkAD} />
            </Switch>
        </AnimatePresence>
    );
}

export default App;
