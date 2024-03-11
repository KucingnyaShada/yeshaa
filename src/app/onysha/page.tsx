"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.css";

export default function OnyshaPage() {
  let c: any;
  useEffect(() => {
    const onLoad = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
      }, 1000);
    };

    onLoad();

    return () => clearTimeout(c);
  }, [c]);

  return (
    <div>
      <div className={styles["not-loaded"]}>
        <div className={styles.night}></div>
        <div className={styles.flowers}>
          <div className={`${styles.flower} ${styles["flower--1"]}`}>
            <div
              className={`${styles.flower__leafs} ${styles["flower__leafs--1"]}`}
            >
              <div
                className={`${styles.flower__leaf} ${styles["flower__leaf--1"]}`}
              ></div>
              <div
                className={`${styles.flower__leaf} ${styles["flower__leaf--2"]}`}
              ></div>
              <div
                className={`${styles.flower__leaf} ${styles["flower__leaf--3"]}`}
              ></div>
              <div
                className={`${styles.flower__leaf} ${styles["flower__leaf--4"]}`}
              ></div>
              <div className={styles["flower__white-circle"]}></div>

              <div
                className={`${styles.flower__light} ${styles["flower__light--1"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--2"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--3"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--4"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--5"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--6"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--7"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--8"]}`}
              ></div>
            </div>
            <div className={styles["flower__line"]}>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--1"]}`}
              ></div>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--2"]}`}
              ></div>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--3"]}`}
              ></div>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--4"]}`}
              ></div>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--5"]}`}
              ></div>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--6"]}`}
              ></div>
            </div>
          </div>

          <div className={`${styles.flower} ${styles["flower--2"]}`}>
            <div
              className={`${styles.flower__leafs} ${styles["flower__leafs--2"]}`}
            >
              <div
                className={`${styles.flower__leaf} ${styles["flower__leaf--1"]}`}
              ></div>
              <div
                className={`${styles.flower__leaf} ${styles["flower__leaf--2"]}`}
              ></div>
              <div
                className={`${styles.flower__leaf} ${styles["flower__leaf--3"]}`}
              ></div>
              <div
                className={`${styles.flower__leaf} ${styles["flower__leaf--4"]}`}
              ></div>
              <div className={styles["flower__white-circle"]}></div>

              <div
                className={`${styles.flower__light} ${styles["flower__light--1"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--2"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--3"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--4"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--5"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--6"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--7"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--8"]}`}
              ></div>
            </div>
            <div className={styles["flower__line"]}>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--1"]}`}
              ></div>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--2"]}`}
              ></div>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--3"]}`}
              ></div>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--4"]}`}
              ></div>
            </div>
          </div>

          <div className={`${styles.flower} ${styles["flower--3"]}`}>
            <div
              className={`${styles.flower__leafs} ${styles["flower__leafs--3"]}`}
            >
              <div
                className={`${styles.flower__leaf} ${styles["flower__leaf--1"]}`}
              ></div>
              <div
                className={`${styles.flower__leaf} ${styles["flower__leaf--2"]}`}
              ></div>
              <div
                className={`${styles.flower__leaf} ${styles["flower__leaf--3"]}`}
              ></div>
              <div
                className={`${styles.flower__leaf} ${styles["flower__leaf--4"]}`}
              ></div>
              <div className={styles["flower__white-circle"]}></div>

              <div
                className={`${styles.flower__light} ${styles["flower__light--1"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--2"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--3"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--4"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--5"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--6"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--7"]}`}
              ></div>
              <div
                className={`${styles.flower__light} ${styles["flower__light--8"]}`}
              ></div>
            </div>
            <div className={styles["flower__line"]}>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--1"]}`}
              ></div>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--2"]}`}
              ></div>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--3"]}`}
              ></div>
              <div
                className={`${styles.flower__line__leaf} ${styles["flower__line__leaf--4"]}`}
              ></div>
            </div>
          </div>

          <div
            className={`${styles["grow-ans"]}`}
            style={{ "--d": "1.2s" } as any}
          >
            <div className={styles["flower__g-long"]}>
              <div className={styles["flower__g-long__top"]}></div>
              <div className={styles["flower__g-long__bottom"]}></div>
            </div>
          </div>

          <div className={styles["growing-grass"]}>
            <div
              className={`${styles.flower__grass} ${styles["flower__grass--1"]}`}
            >
              <div className={styles["flower__grass--top"]}></div>
              <div className={styles["flower__grass--bottom"]}></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--1"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--2"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--3"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--4"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--5"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--6"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--7"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--8"]}`}
              ></div>
              <div className={styles["flower__grass__overlay"]}></div>
            </div>
          </div>

          <div className={styles["growing-grass"]}>
            <div
              className={`${styles.flower__grass} ${styles["flower__grass--2"]}`}
            >
              <div className={styles["flower__grass--top"]}></div>
              <div className={styles["flower__grass--bottom"]}></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--1"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--2"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--3"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--4"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--5"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--6"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--7"]}`}
              ></div>
              <div
                className={`${styles.flower__grass__leaf} ${styles["flower__grass__leaf--8"]}`}
              ></div>
              <div className={styles["flower__grass__overlay"]}></div>
            </div>
          </div>

          <div
            className={`${styles["grow-ans"]}`}
            style={{ "--d": "2.4s" } as any}
          >
            <div
              className={`${styles["flower__g-right"]} ${styles["flower__g-right--1"]}`}
            >
              <div className={styles.leaf}></div>
            </div>
          </div>

          <div
            className={`${styles["grow-ans"]}`}
            style={{ "--d": "2.8s" } as any}
          >
            <div
              className={`${styles["flower__g-right"]} ${styles["flower__g-right--2"]}`}
            >
              <div className={styles.leaf}></div>
            </div>
          </div>

          <div
            className={`${styles["grow-ans"]}`}
            style={{ "--d": "2.8s" } as any}
          >
            <div className={styles["flower__g-front"]}>
              <div
                className={`${styles["flower__g-front__leaf-wrapper"]} ${styles["flower__g-front__leaf-wrapper--1"]}`}
              >
                <div className={styles["flower__g-front__leaf"]}></div>
              </div>
              <div
                className={`${styles["flower__g-front__leaf-wrapper"]} ${styles["flower__g-front__leaf-wrapper--2"]}`}
              >
                <div className={styles["flower__g-front__leaf"]}></div>
              </div>
              <div
                className={`${styles["flower__g-front__leaf-wrapper"]} ${styles["flower__g-front__leaf-wrapper--3"]}`}
              >
                <div className={styles["flower__g-front__leaf"]}></div>
              </div>
              <div
                className={`${styles["flower__g-front__leaf-wrapper"]} ${styles["flower__g-front__leaf-wrapper--4"]}`}
              >
                <div className={styles["flower__g-front__leaf"]}></div>
              </div>
              <div
                className={`${styles["flower__g-front__leaf-wrapper"]} ${styles["flower__g-front__leaf-wrapper--5"]}`}
              >
                <div className={styles["flower__g-front__leaf"]}></div>
              </div>
              <div
                className={`${styles["flower__g-front__leaf-wrapper"]} ${styles["flower__g-front__leaf-wrapper--6"]}`}
              >
                <div className={styles["flower__g-front__leaf"]}></div>
              </div>
              <div
                className={`${styles["flower__g-front__leaf-wrapper"]} ${styles["flower__g-front__leaf-wrapper--7"]}`}
              >
                <div className={styles["flower__g-front__leaf"]}></div>
              </div>
              <div
                className={`${styles["flower__g-front__leaf-wrapper"]} ${styles["flower__g-front__leaf-wrapper--8"]}`}
              >
                <div className={styles["flower__g-front__leaf"]}></div>
              </div>
              <div className={styles["flower__g-front__line"]}></div>
            </div>
          </div>

          <div
            className={`${styles["grow-ans"]}`}
            style={{ "--d": "3.2s" } as any}
          >
            <div className={styles["flower__g-fr"]}>
              <div className={styles.leaf}></div>
              <div
                className={`${styles["flower__g-fr__leaf"]} ${styles["flower__g-fr__leaf--1"]}`}
              ></div>
              <div
                className={`${styles["flower__g-fr__leaf"]} ${styles["flower__g-fr__leaf--2"]}`}
              ></div>
              <div
                className={`${styles["flower__g-fr__leaf"]} ${styles["flower__g-fr__leaf--3"]}`}
              ></div>
              <div
                className={`${styles["flower__g-fr__leaf"]} ${styles["flower__g-fr__leaf--4"]}`}
              ></div>
              <div
                className={`${styles["flower__g-fr__leaf"]} ${styles["flower__g-fr__leaf--5"]}`}
              ></div>
              <div
                className={`${styles["flower__g-fr__leaf"]} ${styles["flower__g-fr__leaf--6"]}`}
              ></div>
              <div
                className={`${styles["flower__g-fr__leaf"]} ${styles["flower__g-fr__leaf--7"]}`}
              ></div>
              <div
                className={`${styles["flower__g-fr__leaf"]} ${styles["flower__g-fr__leaf--8"]}`}
              ></div>
            </div>
          </div>

          <div
            className={`${styles["long-g"]} ${styles["long-g--0"]}`}
            style={{ "--d": "3s" } as any}
          >
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--0"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "2.2s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--1"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3.4s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--2"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3.6s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--3"]}`}></div>
            </div>
          </div>

          <div
            className={`${styles["long-g"]} ${styles["long-g--1"]}`}
            style={{ "--d": "3.6s" } as any}
          >
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3.6s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--0"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3.8s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--1"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--2"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4.2s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--3"]}`}></div>
            </div>
          </div>

          <div
            className={`${styles["long-g"]} ${styles["long-g--2"]}`}
            style={{ "--d": "4s" } as any}
          >
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--0"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4.2s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--1"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4.4s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--2"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4.6s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--3"]}`}></div>
            </div>
          </div>

          <div
            className={`${styles["long-g"]} ${styles["long-g--3"]}`}
            style={{ "--d": "4s" } as any}
          >
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--0"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4.2s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--1"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--2"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3.6s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--3"]}`}></div>
            </div>
          </div>

          <div
            className={`${styles["long-g"]} ${styles["long-g--4"]}`}
            style={{ "--d": "4s" } as any}
          >
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--0"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4.2s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--1"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--2"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3.6s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--3"]}`}></div>
            </div>
          </div>

          <div
            className={`${styles["long-g"]} ${styles["long-g--5"]}`}
            style={{ "--d": "4s" } as any}
          >
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--0"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4.2s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--1"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--2"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3.6s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--3"]}`}></div>
            </div>
          </div>

          <div
            className={`${styles["long-g"]} ${styles["long-g--6"]}`}
            style={{ "--d": "4.2s" } as any}
          >
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4.2s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--0"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4.4s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--1"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4.6s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--2"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "4.8s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--3"]}`}></div>
            </div>
          </div>

          <div
            className={`${styles["long-g"]} ${styles["long-g--7"]}`}
            style={{ "--d": "3s" } as any}
          >
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--0"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3.2s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--1"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3.5s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--2"]}`}></div>
            </div>
            <div
              className={`${styles["grow-ans"]}`}
              style={{ "--d": "3.6s" } as any}
            >
              <div className={`${styles.leaf} ${styles["leaf--3"]}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
