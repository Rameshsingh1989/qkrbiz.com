import { QkrbizLoader as ImagesUrl_QkrbizLoader } from "../../assets/images";import './PageLoader.scss';

const PageLoader = () => {
  return (
    <>
        <div className="loader">
           <img loading="lazy" className="img-fluid" src={ImagesUrl_QkrbizLoader} style={styles.LoaderHeight} alt="Loader" />
        </div>
    </>
  )
}

export default PageLoader

const styles = {
  LoaderHeight: {
    width: "6rem",
    Height: "6rem",
  },
}