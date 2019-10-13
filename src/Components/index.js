import React, { useState, useEffect } from 'react';
import './style.sass';

const App = () => {
  let total1 = 7;
  let total2 = 8;
  let total3 = 6;
  const [buttonType, setButtonType] = useState('data1');
  const [items, setItems] = useState(null);
  const [visible, setVisible] = useState(2);
  const [loading, setLoading] = useState(false);
  const [constant, setConstant] = useState(3);
  const [total, setTotal] = useState(total1);
  useEffect(() => {
    setItems(null);
    setLoading(true);
    switch (buttonType) {
      case 'data1':
        setTimeout(() => {
          setItems(data1.slice(0, constant));
          setLoading(false);
        }, 1000);
        break;
      case 'data2':
        setTimeout(() => {
          setItems(data2.slice(0, constant));
          setLoading(false);
        }, 1000);
        break;
      case 'data3':
        setTimeout(() => {
          setItems(data3.slice(0, constant));
          setLoading(false);
        }, 1000);
        break;
      default:
        return;
    }
  }, [buttonType]);
  useEffect(() => {
    setLoading(true);
    switch (buttonType) {
      case 'data1':
        setTimeout(() => {
          setItems(data1);
          setLoading(false);
        }, 1000);
        break;
      case 'data2':
        setTimeout(() => {
          console.log(data2);
          setItems(data2);
          setLoading(false);
        }, 1000);
        break;
      case 'data3':
        setTimeout(() => {
          setItems(data3);
          setLoading(false);
        }, 1000);
        break;
      default:
        return;
    }
  }, [constant]);

  const loadMore = () => {
    // setVisible(visible + 4);
    setConstant(7);
    console.log('test');
    // constant = 7;
  };

  const showDataHandler = items => {
    return (
      items &&
      items.map((item, index) => {
        return (
          <div className='tile fade-in' key={item.id}>
            <span className='count'>{index + 1}</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })
    );
  };
  return (
    <section className='feed'>
      <h1>Simple Load More/Pagination with React</h1>
      {loading && <h2>Loading...</h2>}
      <div className='flex'>
        <button
          className='tile'
          onClick={() => {
            setButtonType('data1');
            setConstant(3);
            setTotal(total1);
          }}
        >
          Button for data 1
        </button>
        <button
          className='tile'
          onClick={() => {
            setButtonType('data2');
            setConstant(3);
            setTotal(total2);
          }}
        >
          Button for data 2
        </button>
        <button
          className='tile'
          onClick={() => {
            setButtonType('data3');
            setConstant(3);
            setTotal(total3);
          }}
        >
          Button for data 3
        </button>
      </div>
      <div className='tiles' aria-live='polite'>
        {showDataHandler(items)}
      </div>

      {items && total > items.length && (
        <button onClick={loadMore} type='button' className='load-more'>
          Load {total - 3} more
        </button>
      )}
    </section>
  );
};

export default App;

let data1 = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body:
      'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
  },
  {
    userId: 1,
    id: 4,
    title: 'eum et est occaecati',
    body:
      'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
  },
  {
    userId: 1,
    id: 5,
    title: 'nesciunt quas odio',
    body:
      'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
  },
  {
    userId: 1,
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body:
      'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
  },
  {
    userId: 1,
    id: 7,
    title: 'magnam facilis autem',
    body:
      'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'
  }
];
let data2 = [
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body:
      'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
  },
  {
    userId: 1,
    id: 4,
    title: 'eum et est occaecati',
    body:
      'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
  },
  {
    userId: 2,
    id: 12,
    title: 'in quibusdam tempore odit est dolorem',
    body:
      'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio'
  },
  {
    userId: 2,
    id: 13,
    title: 'dolorum ut in voluptas mollitia et saepe quo animi',
    body:
      'aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam'
  },
  {
    userId: 2,
    id: 14,
    title: 'voluptatem eligendi optio',
    body:
      'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum'
  },
  {
    userId: 2,
    id: 15,
    title: 'eveniet quod temporibus',
    body:
      'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae'
  },
  {
    userId: 1,
    id: 5,
    title: 'nesciunt quas odio',
    body:
      'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
  }
];
let data3 = [
  {
    userId: 1,
    id: 5,
    title: 'nesciunt quas odio',
    body:
      'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
  },
  {
    userId: 1,
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body:
      'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
  },
  {
    userId: 1,
    id: 7,
    title: 'magnam facilis autem',
    body:
      'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'
  },
  {
    userId: 3,
    id: 27,
    title: 'quasi id et eos tenetur aut quo autem',
    body:
      'eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur'
  },
  {
    userId: 3,
    id: 28,
    title: 'delectus ullam et corporis nulla voluptas sequi',
    body:
      'non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum'
  },
  {
    userId: 3,
    id: 29,
    title: 'iusto eius quod necessitatibus culpa ea',
    body:
      'odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores'
  }
];
