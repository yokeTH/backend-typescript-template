import App from '@/app';
import ApiRoute from '@/routes/api';

const app = new App([new ApiRoute()]);

app.listen();
