import PropTypes from "prop-types";
import * as Dialog from "@radix-ui/react-dialog";
import "./artworkModal.scss";
import { useGlobalContext } from "../contexts/GlobalContextProvider";

function ArtworkModal({ id, title, date, technique, format, src, artistId }) {
  const { artworks, artists } = useGlobalContext();
  const { facts } = artworks.find((element) => element.id === id);
  const artist = artists.find((e) => e.id === artistId);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="Button violet">
          {title}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialogOverlay" />
        <Dialog.Content className="dialogContent">
          <article className="popUp">
            <nav className="popUp__nav">
              <label className="popUp__nav__label" htmlFor="close_button">
                Fermer
              </label>
              <Dialog.Close asChild>
                <input
                  className="popUp__nav__button"
                  type="button"
                  id="close_button"
                  name="close_button"
                />
              </Dialog.Close>
            </nav>
            <section className="popUp__content">
              <img src={src} alt="" className="popUp__content__img" />
              <hgroup className="popUp__content__info">
                <header>
                  <Dialog.Title className="popUp__content__info__title">
                    {title}
                  </Dialog.Title>
                  <Dialog.Description className="popUp__content__info__details">{`${date} - ${technique} - ${format}`}</Dialog.Description>
                </header>
                {facts.map((element) => (
                  <p key={element.id} className="popUp__content__info__fact">
                    {element.fact}
                  </p>
                ))}
                <h3 className="popUp__content__info__artist">{artist.name}</h3>
              </hgroup>
            </section>
          </article>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

ArtworkModal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  technique: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  artistId: PropTypes.number.isRequired,
};

export default ArtworkModal;
