import app from './app';

require('dotenv').config();

const server = app.listen(process.env.PORT, () => {
    console.log(`A aplicação está sendo executada na porta ${process.env.PORT}`);
});

export default server;