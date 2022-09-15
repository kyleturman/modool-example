import { ModoolLoader } from 'modool'

const modool_context = require.context('./modules', false, /\.js$/);
ModoolLoader.load(modool_context);
