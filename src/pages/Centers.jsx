import styles from "./Centers.module.css";
import Navigation from "../assets/components/Navigation";

function Centers() {
  return (
    <div>
      <Navigation />
      <section className={styles.center}>
        <div className={styles.centerContainer}>
          <div className="textBox">
            <h1>Medicana Healthcare Group</h1>
            <p>
              Discover excellence with Medicana Healthcare Group, a leading
              provider with over 30 years of expertise in healthcare and
              education, operating 16 state-of-the-art hospitals throughout
              Turkey. In the field of cancer and oncology, Medicana leads with
              over 7 advanced robotic devices and 1 MR Linac machine, offering
              premier oncology services in cities such as Ankara, Bursa and
              Izmir.
              <br />
              As Technomed Company, by collaboration with Medicana Healthcare
              Group, we have successfully installed the MR-Linac Unity system,
              marking the 3rd installation in Turkey and the 42nd globally, at
              Medicana Ataşehir Hospital.
            </p>
          </div>
          <div className={styles.centerImageBoxes}>
            <img
              className={styles.centerImage1}
              src="images/medicana-1.jpg"
              alt="medicana"
            />
            <img
              className={styles.centerImage2}
              src="images/medicana-2.jpg"
              alt="medicana"
            />
          </div>
        </div>
        <div className={styles.centerContainer}>
          <div className="textBox">
            <h1>Antalya City Hospital</h1>
            <p></p>
          </div>

          <img
            className={styles.centerImage3}
            src="images/antalya.jpg"
            alt="Antalya"
          />
        </div>
      </section>
    </div>
  );
}

export default Centers;