import React from "react";

export class Modal1 extends React.Component {
  openModal2() {
    console.log("modal2opeeeeen");
    // document.querySelector(".modal-step1").removeAttribute("hidden");
    document.querySelectorAll("span").forEach((element) => {
      element.classList.add("expanded");
    });

    document.querySelector(".modal-step1").classList.remove("slideup");
    document.querySelector(".modal-step1").style.top = "56%";
    document.querySelector(".modal-step1").classList.add("background-fadeout");
    document.querySelector(".modal-step1").children[0].classList.add("fadeout");
    document.querySelector(".modal-step1").children[1].classList.add("fadeout");
    document.querySelector(".modal-step1").children[2].classList.add("fadeout");

    setTimeout(function () {
      // document.querySelector(".modal-step1").style.background = "transparent";
      const headlineAnimated = document.querySelector(".headline-animated");
      headlineAnimated.removeAttribute("hidden");
      document.querySelector(".modal-step2").removeAttribute("hidden");

      const span = (text, index) => {
        const node = document.createElement("span");

        node.innerText = text;
        node.style.setProperty("--index", index);
        document.querySelector("index13");

        return node;
      };

      const byLetter = (text) => [...text].map(span);

      const splitTargets = document.querySelectorAll("[data-split-letters]");

      splitTargets.forEach((node) => {
        let nodes = null;
        nodes = byLetter(node.innerText);

        console.log(node.firstChild);

        if (nodes) node.firstChild.replaceWith(...nodes);
      });

      // function restart() {
      //   headlineAnimated
      //     .getAnimations({
      //       subtree: true,
      //     })
      //     .forEach((animation) => {
      //       if (animation.animationName === "fill") {
      //         animation.currentTime = 0;
      //       }
      //     });
      // }
    }, 500);
  }

  render() {
    return (
      <div hidden className="modal modal-step1 centered">
        <h4 className="headline-green">GET AHEAD OF YOUR COMPETITION</h4>
        <p>Be the first to hear when new articles are released and get exclusive content, by signing up for news.</p>
        <form className="frontpage-form">
          <div className="form-group form-firstname">
            <input className="form-input" type="text" id="firstname" name="firstname" placeholder=" " />
            <label className="form-label" htmlFor="firstname">
              First name
            </label>
            <div className="error" hidden>
              Please tell us your first name
            </div>
          </div>
          <div className="form-group form-lastname">
            <input className="form-input" type="text" id="lastname" name="lastname" placeholder=" " />
            <label className="form-label" htmlFor="lastname">
              Last name
            </label>
            <div className="error" hidden>
              Please tell us your last name
            </div>
          </div>
          <div className="form-group form-email">
            <input className="form-input" type="email" id="email" name="email" placeholder=" " />
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <div className="error" hidden>
              Please provide a valid email address
            </div>
          </div>
        </form>
        <button className="btn-orange btn-signup-step1" onClick={() => this.openModal2()}>
          YES, I WANT TO IMPROVE!
        </button>
        <span className="color color--orange" data-value={1} />
      </div>
    );
  }
}

export class Modal2 extends React.Component {
  closeModal2() {
    document.querySelector(".modal-step1").style.background = "transparent";
    document.querySelector(".modal-step1").classList.add("slidedown");
    document.querySelector(".modal-step2").classList.add("slidedown");
    document.querySelector(".frontpageBody").classList.remove("overlay");
    document.querySelector(".btn-frontpage").classList.remove("fadeout");
    // document.querySelector(".frontpageBody").classList.add("overlayout");
  }

  render() {
    return (
      <div hidden className="modal modal-step2 centered">
        <h3 className="headline-animated" data-split-letters hidden>
          IT'S GREAT TO HAVE YOU!
        </h3>
        <p>Check your email to confirm &amp; customize subscription!</p>
        <button className="btn-purple btn-signup-step2" onClick={() => this.closeModal2()}>
          BACK TO THE PAGE
        </button>
      </div>
    );
  }
}
