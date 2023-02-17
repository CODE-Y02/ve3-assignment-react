import styles from "./InfoCard.module.css";

const InfoCard = () => {
  return (
    <div className={styles["info-box"]}>
      <h2>Heading</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quidem,
        mollitia, id, labore illo dicta neque accusamus laboriosam dolorem
        asperiores rerum impedit magni rem molestiae.
      </p>
    </div>
  );
};
export default InfoCard;
