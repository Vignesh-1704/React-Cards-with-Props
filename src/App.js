import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="wrapper">
      <Card title = "Stranger Things" desc = "Stranger Things is an American science fiction horror drama television series created by the Duffer Brothers" img = "https://news.westbranch.org/wp-content/uploads/2019/09/1553257828-stransgerthingscover-900x599.jpg"/>
      <Card title = "Peaky Blinders" desc = "Peaky Blinders led by Thomas Shelby is a British period crime drama television series created by Steven Knight " img = "https://thenationroar.com/wp-content/uploads/2020/05/peaky-blinders-poster.jpg"/>
      <Card title = "Breaking Bad" desc = "Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan for AMC. " img = "https://th.bing.com/th/id/R.261efbd9203c7ab3297bae26990ac4e5?rik=OXFiWnSR00mD%2bw&riu=http%3a%2f%2fatlantablackstar.com%2fwp-content%2fuploads%2f2013%2f08%2fBreaking-Bad-Movie-Desktop.jpg&ehk=N2cvHYD14mMni6coJZ6D2Pfyke1wHI8YrSzXsSGKP6k%3d&risl=&pid=ImgRaw&r=0"/>
    </div>
  );
}

export default App;
