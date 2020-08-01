import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <div>Let&lsquo;s start</div>
    <div className="s" aria-atomic aria-colspan={2}>
      Core
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam autem dignissimos
      dolores, error eum exercitationem fugiat fugit incidunt labore libero magnam maiores
      omnis, optio quas quos,
      tenetur. Nobis, quia.d
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
