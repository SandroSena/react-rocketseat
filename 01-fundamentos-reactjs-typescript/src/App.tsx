// JSX = Javascript + XML

import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Siderbar } from './components/Sidebar';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/sandrosena.png',
      name: 'Sandro Sena',
      role: 'Frontend Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },

      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-08-23 10:14:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/pedrosato.png',
      name: 'Pedro Sato',
      role: 'Backend Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },

      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-08-24 10:14:00'),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
