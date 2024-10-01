import "./styles.css";

function Animal({ emoji, name, description }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      {description}
      <Button>
        Adopt <strong>{name}</strong>
      </Button>
    </>
  );
}

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐕" name="Lucky" description={<p>Very cute dog</p>} />
      <Animal emoji="🐈" name="Mittens" description={<p>Very nice kitty</p>} />
      <Animal
        emoji="🐢"
        name="Archibald"
        description={
          <>
            <p>Super relaxed turtle</p>
            <ul>
              <li>Eats lettuce all the time</li>
              <li>Can sleep in your fridge</li>
            </ul>
          </>
        }
      />
      <Animal emoji="🐣" name="Chick Norris" />
    </main>
  );
}

function Button({ children }) {
  console.log("Children: ", children);
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
}
