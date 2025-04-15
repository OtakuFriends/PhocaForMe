"use client";
import styles from "./index.module.css";
import Image from "next/image";

interface Idol {
  idolName: string;
  idolImage: string;
}

interface ChartContentProps {
  rankData: Idol[];
}

const ChartContent = ({ rankData }: ChartContentProps) => {
  if (rankData.length === 0) return <div>로딩중</div>;

  return (
    <div className={styles.chartAlign}>
      <div className={styles.chartContainer}>
        <div className={styles.rank1Idol}>
          <div className={styles.rank1Emoji}>
            <p className={styles.medal}>🥇</p>
            <div className={styles.rank1Image}>
              <Image
                className={styles.image}
                alt="1위"
                fill
                sizes="80vw"
                style={{ objectFit: "cover" }}
                src={rankData[0].idolImage}
              />
            </div>
          </div>
          <div className={styles.rank1Title}>
            <div className={styles.mainBig}>1위 {rankData[0].idolName}</div>
          </div>
        </div>

        <div className={styles.rank23Idol}>
          {[2, 3].map((rank) => (
            <div key={rank} className={styles.rankItem}>
              <div className={styles.rankText}>{rank}위</div>
              <div className={styles.rank23Image}>
                <Image
                  className={styles.image}
                  alt={`${rank}위`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="80vw"
                  src={rankData[rank - 1]?.idolImage}
                />
              </div>
              <div className={styles.rankText}>
                {rankData[rank - 1]?.idolName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartContent;
