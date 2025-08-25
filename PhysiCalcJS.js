document.addEventListener('DOMContentLoaded', function() {
    const window_input_bad = document.getElementById("searchBox");
  
    if (window_input_bad) {
      window_input_bad.addEventListener('input', function() {
        const window_input = window_input_bad.value;
        console.log(window_input);
      });
    }
  });

 function mehJS() {
  const meh_swap_Elements_1 = document.getElementById('meh_swap_Elements');
  console.log('braaa');
  meh_swap_Elements_1.scrollIntoView({
    behavior:"smooth",
    block: "center"
  }); 
};

function mktJS() {
  const mkt_swap_Elements_1 = document.getElementById('mkt_swap_Elements');
  console.log('braaa');
  mkt_swap_Elements_1.scrollIntoView({
    behavior:"smooth",
    block: "center"
  }); 
};

function electrostatics_swap_ElementsJS() {
  const electrostatics_swap_Elements_1 = document.getElementById('electrostatics_swap_Elements');
  console.log('braaa');
  electrostatics_swap_Elements_1.scrollIntoView({
    behavior:"smooth",
    block: "center"
  }); 
};

function DC_swap_ElementsJS() {
  const DC_swap_Elements_1 = document.getElementById('DC_swap_Elements');
  console.log('braaa');
  DC_swap_Elements_1.scrollIntoView({
    behavior:"smooth",
    block: "center"
  }); 
};

function bylerwbz_swap_ElementsJS() {
  const bylerwbz_swap_Elements_1 = document.getElementById('bylerwbz_swap_Elements');
  console.log('braaa');
  bylerwbz_swap_Elements_1.scrollIntoView({
    behavior:"smooth",
    block: "center"
  }); 
};

document.addEventListener('DOMContentLoaded', function run_skebob(){
  const box_chat_bot_js = document.getElementById('box_chat_bot_id');
  const button_bot_img_js = document.getElementById('button_bot_img_id');

  button_bot_img_js.addEventListener('click', function run_button_bot_img_js(){
    box_chat_bot_js.classList.toggle('execut');
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const mkt_1_formule_by_id = document.getElementById('mkt_1_formule_by_id');
  const div_mkt_1_formule = document.getElementById('div_mkt_1_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const listContainer = document.getElementById('listContainer');

  mkt_1_formule_by_id.addEventListener('click', function run_mkt_1_formule_by_id() {
    div_mkt_1_formule.classList.toggle('execut');

    if (!listContainer.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "n — концентрация молекул;",
        "k = 1,38·10-23 Дж/К — постоянная Больцмана;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer.appendChild(ul);
    } else {
      const ulToRemove = listContainer.querySelector('ul');
      listContainer.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  });
});

document.addEventListener('DOMContentLoaded', function run_1_skebob() {
  const mkt_3_formule_by_id = document.getElementById('mkt_3_formule_by_id');
  const div_mkt_3_formule = document.getElementById('div_mkt_3_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const listContainer_3 = document.getElementById('listContainer_3');

  mkt_3_formule_by_id.addEventListener('click', function run_mkt_3_formule_by_id() {
    div_mkt_3_formule.classList.toggle('execut');

    if (!listContainer_3.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "n — концентрация молекул;",
        "k = 1,38·10-23 Дж/К — постоянная Больцмана;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_3.appendChild(ul);
    } else {
      const ulToRemove = listContainer_3.querySelector('ul');
      listContainer_3.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  });
});

document.addEventListener('DOMContentLoaded', function run_2_skebob() {
  const mkt_4_formule_by_id = document.getElementById('mkt_4_formule_by_id');
  const div_mkt_4_formule = document.getElementById('div_mkt_4_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const listContainer_4 = document.getElementById('listContainer_4');

  mkt_4_formule_by_id.addEventListener('click', function run_mkt_4_formule_by_id() {
    div_mkt_4_formule.classList.toggle('execut');

    if (!listContainer_4.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "n — концентрация молекул;",
        "k = 1,38·10-23 Дж/К — постоянная Больцмана;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_4.appendChild(ul);
    } else {
      const ulToRemove = listContainer_4.querySelector('ul');
      listContainer_4.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const mkt_5_formule_by_id = document.getElementById('mkt_5_formule_by_id');
  const div_mkt_5_formule = document.getElementById('div_mkt_5_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const listContainer_5 = document.getElementById('listContainer_5');

  mkt_5_formule_by_id.addEventListener('click', function run_mkt_5_formule_by_id() {
    div_mkt_5_formule.classList.toggle('execut');

    if (!listContainer_5.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "n — концентрация молекул;",
        "k = 1,38·10-23 Дж/К — постоянная Больцмана;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_5.appendChild(ul);
    } else {
      const ulToRemove = listContainer_5.querySelector('ul');
      listContainer_5.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const mkt_6_formule_by_id = document.getElementById('mkt_6_formule_by_id');
  const div_mkt_6_formule = document.getElementById('div_mkt_6_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const listContainer_6 = document.getElementById('listContainer_6');

  mkt_6_formule_by_id.addEventListener('click', function run_mkt_6_formule_by_id() {
    div_mkt_6_formule.classList.toggle('execut');

    if (!listContainer_6.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "n — концентрация молекул;",
        "k = 1,38·10-23 Дж/К — постоянная Больцмана;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_6.appendChild(ul);
    } else {
      const ulToRemove = listContainer_6.querySelector('ul');
      listContainer_6.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const mkt_7_formule_by_id = document.getElementById('mkt_7_formule_by_id');
  const div_mkt_7_formule = document.getElementById('div_mkt_7_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const listContainer_7 = document.getElementById('listContainer_7');

  mkt_7_formule_by_id.addEventListener('click', function run_mkt_7_formule_by_id() {
    div_mkt_7_formule.classList.toggle('execut');

    if (!listContainer_7.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "n — концентрация молекул;",
        "k = 1,38·10-23 Дж/К — постоянная Больцмана;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_7.appendChild(ul);
    } else {
      const ulToRemove = listContainer_7.querySelector('ul');
      listContainer_7.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const mkt_8_formule_by_id = document.getElementById('mkt_8_formule_by_id');
  const div_mkt_8_formule = document.getElementById('div_mkt_8_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const listContainer_8 = document.getElementById('listContainer_8');

  mkt_8_formule_by_id.addEventListener('click', function run_mkt_8_formule_by_id() {
    div_mkt_8_formule.classList.toggle('execut');

    if (!listContainer_8.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "n — концентрация молекул;",
        "k = 1,38·10-23 Дж/К — постоянная Больцмана;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_8.appendChild(ul);
    } else {
      const ulToRemove = listContainer_8.querySelector('ul');
      listContainer_8.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const mkt_9_formule_by_id = document.getElementById('mkt_9_formule_by_id');
  const div_mkt_9_formule = document.getElementById('div_mkt_9_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const listContainer_9 = document.getElementById('listContainer_9');

  mkt_9_formule_by_id.addEventListener('click', function run_mkt_9_formule_by_id() {
    div_mkt_9_formule.classList.toggle('execut');

    if (!listContainer_9.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "n — концентрация молекул;",
        "k = 1,38·10-23 Дж/К — постоянная Больцмана;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_9.appendChild(ul);
    } else {
      const ulToRemove = listContainer_9.querySelector('ul');
      listContainer_9.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const mkt_10_formule_by_id = document.getElementById('mkt_10_formule_by_id');
  const div_mkt_10_formule = document.getElementById('div_mkt_10_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const listContainer_10 = document.getElementById('listContainer_10');

  mkt_10_formule_by_id.addEventListener('click', function run_mkt_10_formule_by_id() {
    div_mkt_10_formule.classList.toggle('execut');

    if (!listContainer_10.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "n — концентрация молекул;",
        "k = 1,38·10-23 Дж/К — постоянная Больцмана;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_10.appendChild(ul);
    } else {
      const ulToRemove = listContainer_10.querySelector('ul');
      listContainer_10.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const mkt_11_formule_by_id = document.getElementById('mkt_11_formule_by_id');
  const div_mkt_11_formule = document.getElementById('div_mkt_11_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const listContainer_11 = document.getElementById('listContainer_11');

  mkt_11_formule_by_id.addEventListener('click', function run_mkt_11_formule_by_id() {
    div_mkt_11_formule.classList.toggle('execut');

    if (!listContainer_11.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "n — концентрация молекул;",
        "k = 1,38·10-23 Дж/К — постоянная Больцмана;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_11.appendChild(ul);
    } else {
      const ulToRemove = listContainer_11.querySelector('ul');
      listContainer_11.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const mkt_12_formule_by_id = document.getElementById('mkt_12_formule_by_id');
  const div_mkt_12_formule = document.getElementById('div_mkt_12_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const listContainer_12 = document.getElementById('listContainer_12');

  mkt_12_formule_by_id.addEventListener('click', function run_mkt_12_formule_by_id() {
    div_mkt_12_formule.classList.toggle('execut');

    if (!listContainer_12.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "n — концентрация молекул;",
        "k = 1,38·10-23 Дж/К — постоянная Больцмана;",
        "T = t+273 — абсолютная температура;"
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_12.appendChild(ul);
    } else {
      const ulToRemove = listContainer_12.querySelector('ul');
      listContainer_12.removeChild(ulToRemove);
    }

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    }
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const mkt_2_formule_by_id = document.getElementById('mkt_2_formule_by_id');
  const div_mkt_2_formule = document.getElementById('div_mkt_2_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const listContainer_2 = document.getElementById('listContainer_2');

  mkt_2_formule_by_id.addEventListener('click', function run_mkt_2_formule_by_id() {
    div_mkt_2_formule.classList.toggle('execut');

    if (!listContainer_2.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      listContainer_2.appendChild(ul);
    } else {
      const ulToRemove = listContainer_2.querySelector('ul');
      listContainer_2.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});



document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_1_formule_by_id = document.getElementById('elektro_1_formule_by_id');
  const div_elektro_1_formule_bu_id_js = document.getElementById('div_elektro_1_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_1 = document.getElementById('elektro_listContainer_1');

  elektro_1_formule_by_id.addEventListener('click', function run_elektro_1_formule_by_id() {
    div_elektro_1_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_1.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_1.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_1.querySelector('ul');
      elektro_listContainer_1.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_2_formule_by_id = document.getElementById('elektro_2_formule_by_id');
  const div_elektro_2_formule_bu_id_js = document.getElementById('div_elektro_2_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_2 = document.getElementById('elektro_listContainer_2');

  elektro_2_formule_by_id.addEventListener('click', function run_elektro_2_formule_by_id() {
    div_elektro_2_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_2.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_2.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_2.querySelector('ul');
      elektro_listContainer_2.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_3_formule_by_id = document.getElementById('elektro_3_formule_by_id');
  const div_elektro_3_formule_bu_id_js = document.getElementById('div_elektro_3_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_3 = document.getElementById('elektro_listContainer_3');

  elektro_3_formule_by_id.addEventListener('click', function run_elektro_3_formule_by_id() {
    div_elektro_3_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_3.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_3.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_3.querySelector('ul');
      elektro_listContainer_3.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_4_formule_by_id = document.getElementById('elektro_4_formule_by_id');
  const div_elektro_4_formule_bu_id_js = document.getElementById('div_elektro_4_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_4 = document.getElementById('elektro_listContainer_4');

  elektro_4_formule_by_id.addEventListener('click', function run_elektro_4_formule_by_id() {
    div_elektro_4_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_4.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_4.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_4.querySelector('ul');
      elektro_listContainer_4.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_5_formule_by_id = document.getElementById('elektro_5_formule_by_id');
  const div_elektro_5_formule_bu_id_js = document.getElementById('div_elektro_5_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_5 = document.getElementById('elektro_listContainer_5');

  elektro_5_formule_by_id.addEventListener('click', function run_elektro_5_formule_by_id() {
    div_elektro_5_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_5.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_5.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_5.querySelector('ul');
      elektro_listContainer_5.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_6_formule_by_id = document.getElementById('elektro_6_formule_by_id');
  const div_elektro_6_formule_bu_id_js = document.getElementById('div_elektro_6_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_6 = document.getElementById('elektro_listContainer_6');

  elektro_6_formule_by_id.addEventListener('click', function run_elektro_6_formule_by_id() {
    div_elektro_6_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_6.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_6.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_6.querySelector('ul');
      elektro_listContainer_6.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_7_formule_by_id = document.getElementById('elektro_7_formule_by_id');
  const div_elektro_7_formule_bu_id_js = document.getElementById('div_elektro_7_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_7 = document.getElementById('elektro_listContainer_7');

  elektro_7_formule_by_id.addEventListener('click', function run_elektro_7_formule_by_id() {
    div_elektro_7_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_7.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_7.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_7.querySelector('ul');
      elektro_listContainer_7.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_8_formule_by_id = document.getElementById('elektro_8_formule_by_id');
  const div_elektro_8_formule_bu_id_js = document.getElementById('div_elektro_8_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_8 = document.getElementById('elektro_listContainer_8');

  elektro_8_formule_by_id.addEventListener('click', function run_elektro_8_formule_by_id() {
    div_elektro_8_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_8.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_8.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_8.querySelector('ul');
      elektro_listContainer_8.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_9_formule_by_id = document.getElementById('elektro_9_formule_by_id');
  const div_elektro_9_formule_bu_id_js = document.getElementById('div_elektro_9_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_9 = document.getElementById('elektro_listContainer_9');

  elektro_9_formule_by_id.addEventListener('click', function run_elektro_9_formule_by_id() {
    div_elektro_9_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_9.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_9.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_9.querySelector('ul');
      elektro_listContainer_9.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_10_formule_by_id = document.getElementById('elektro_10_formule_by_id');
  const div_elektro_10_formule_bu_id_js = document.getElementById('div_elektro_10_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_10 = document.getElementById('elektro_listContainer_10');

  elektro_10_formule_by_id.addEventListener('click', function run_elektro_10_formule_by_id() {
    div_elektro_10_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_10.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_10.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_10.querySelector('ul');
      elektro_listContainer_10.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_11_formule_by_id = document.getElementById('elektro_11_formule_by_id');
  const div_elektro_11_formule_bu_id_js = document.getElementById('div_elektro_11_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_11 = document.getElementById('elektro_listContainer_11');

  elektro_11_formule_by_id.addEventListener('click', function run_elektro_1_formule_by_id() {
    div_elektro_11_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_11.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_11.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_11.querySelector('ul');
      elektro_listContainer_11.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_12_formule_by_id = document.getElementById('elektro_12_formule_by_id');
  const div_elektro_12_formule_bu_id_js = document.getElementById('div_elektro_12_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_12 = document.getElementById('elektro_listContainer_12');

  elektro_12_formule_by_id.addEventListener('click', function run_elektro_12_formule_by_id() {
    div_elektro_12_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_12.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_12.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_12.querySelector('ul');
      elektro_listContainer_12.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_13_formule_by_id = document.getElementById('elektro_13_formule_by_id');
  const div_elektro_13_formule_bu_id_js = document.getElementById('div_elektro_13_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_13 = document.getElementById('elektro_listContainer_13');

  elektro_13_formule_by_id.addEventListener('click', function run_elektro_13_formule_by_id() {
    div_elektro_13_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_13.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_13.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_13.querySelector('ul');
      elektro_listContainer_13.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_14_formule_by_id = document.getElementById('elektro_14_formule_by_id');
  const div_elektro_14_formule_bu_id_js = document.getElementById('div_elektro_14_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_14 = document.getElementById('elektro_listContainer_14');

  elektro_14_formule_by_id.addEventListener('click', function run_elektro_14_formule_by_id() {
    div_elektro_14_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_14.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_14.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_14.querySelector('ul');
      elektro_listContainer_14.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_15_formule_by_id = document.getElementById('elektro_15_formule_by_id');
  const div_elektro_15_formule_bu_id_js = document.getElementById('div_elektro_15_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_15 = document.getElementById('elektro_listContainer_15');

  elektro_15_formule_by_id.addEventListener('click', function run_elektro_15_formule_by_id() {
    div_elektro_15_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_15.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_15.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_15.querySelector('ul');
      elektro_listContainer_15.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const elektro_16_formule_by_id = document.getElementById('elektro_16_formule_by_id');
  const div_elektro_16_formule_bu_id_js = document.getElementById('div_elektro_16_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const elektro_listContainer_16 = document.getElementById('elektro_listContainer_16');

  elektro_16_formule_by_id.addEventListener('click', function run_elektro_16_formule_by_id() {
    div_elektro_16_formule_bu_id_js.classList.toggle('execut');

    if (!elektro_listContainer_16.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      elektro_listContainer_16.appendChild(ul);
    } else {
      const ulToRemove = elektro_listContainer_16.querySelector('ul');
      elektro_listContainer_16.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});






document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_1_formule_by_id = document.getElementById('meh_1_formule_by_id');
  const div_meh_1_formule_bu_id_js = document.getElementById('div_meh_1_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_1 = document.getElementById('meh_listContainer_1');

  meh_1_formule_by_id.addEventListener('click', function run_meh_1_formule_by_id() {
    div_meh_1_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_1.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_1.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_1.querySelector('ul');
      meh_listContainer_1.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_1_formule_by_id = document.getElementById('meh_1_formule_by_id');
  const div_meh_1_formule_bu_id_js = document.getElementById('div_meh_1_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_1 = document.getElementById('meh_listContainer_1');

  meh_1_formule_by_id.addEventListener('click', function run_meh_1_formule_by_id() {
    div_meh_1_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_1.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_1.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_1.querySelector('ul');
      meh_listContainer_1.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});


document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_2_formule_by_id = document.getElementById('meh_2_formule_by_id');
  const div_meh_2_formule_bu_id_js = document.getElementById('div_meh_2_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_2 = document.getElementById('meh_listContainer_2');

  meh_2_formule_by_id.addEventListener('click', function run_meh_2_formule_by_id() {
    div_meh_2_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_2.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_2.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_2.querySelector('ul');
      meh_listContainer_2.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_3_formule_by_id = document.getElementById('meh_3_formule_by_id');
  const div_meh_3_formule_bu_id_js = document.getElementById('div_meh_3_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_3 = document.getElementById('meh_listContainer_3');

  meh_3_formule_by_id.addEventListener('click', function run_meh_3_formule_by_id() {
    div_meh_3_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_3.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_3.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_3.querySelector('ul');
      meh_listContainer_3.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_4_formule_by_id = document.getElementById('meh_4_formule_by_id');
  const div_meh_4_formule_bu_id_js = document.getElementById('div_meh_4_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_4 = document.getElementById('meh_listContainer_4');

  meh_4_formule_by_id.addEventListener('click', function run_meh_4_formule_by_id() {
    div_meh_4_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_4.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_4.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_4.querySelector('ul');
      meh_listContainer_4.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_5_formule_by_id = document.getElementById('meh_5_formule_by_id');
  const div_meh_5_formule_bu_id_js = document.getElementById('div_meh_5_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_5 = document.getElementById('meh_listContainer_5');

  meh_5_formule_by_id.addEventListener('click', function run_meh_5_formule_by_id() {
    div_meh_5_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_5.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_5.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_5.querySelector('ul');
      meh_listContainer_5.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_6_formule_by_id = document.getElementById('meh_6_formule_by_id');
  const div_meh_6_formule_bu_id_js = document.getElementById('div_meh_6_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_6 = document.getElementById('meh_listContainer_6');

  meh_6_formule_by_id.addEventListener('click', function run_meh_6_formule_by_id() {
    div_meh_6_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_6.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_6.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_6.querySelector('ul');
      meh_listContainer_6.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_7_formule_by_id = document.getElementById('meh_7_formule_by_id');
  const div_meh_7_formule_bu_id_js = document.getElementById('div_meh_7_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_7 = document.getElementById('meh_listContainer_7');

  meh_7_formule_by_id.addEventListener('click', function run_meh_7_formule_by_id() {
    div_meh_7_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_7.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_7.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_7.querySelector('ul');
      meh_listContainer_7.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_8_formule_by_id = document.getElementById('meh_8_formule_by_id');
  const div_meh_8_formule_bu_id_js = document.getElementById('div_meh_8_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_8 = document.getElementById('meh_listContainer_8');

  meh_8_formule_by_id.addEventListener('click', function run_meh_8_formule_by_id() {
    div_meh_8_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_8.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_8.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_8.querySelector('ul');
      meh_listContainer_8.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_9_formule_by_id = document.getElementById('meh_9_formule_by_id');
  const div_meh_9_formule_bu_id_js = document.getElementById('div_meh_9_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_9 = document.getElementById('meh_listContainer_9');

  meh_9_formule_by_id.addEventListener('click', function run_meh_9_formule_by_id() {
    div_meh_9_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_9.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_9.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_9.querySelector('ul');
      meh_listContainer_9.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_10_formule_by_id = document.getElementById('meh_10_formule_by_id');
  const div_meh_10_formule_bu_id_js = document.getElementById('div_meh_10_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_10 = document.getElementById('meh_listContainer_10');

  meh_10_formule_by_id.addEventListener('click', function run_meh_10_formule_by_id() {
    div_meh_10_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_10.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_10.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_10.querySelector('ul');
      meh_listContainer_10.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_11_formule_by_id = document.getElementById('meh_11_formule_by_id');
  const div_meh_11_formule_bu_id_js = document.getElementById('div_meh_11_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_11 = document.getElementById('meh_listContainer_11');

  meh_11_formule_by_id.addEventListener('click', function run_meh_11_formule_by_id() {
    div_meh_11_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_11.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_11.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_11.querySelector('ul');
      meh_listContainer_11.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_12_formule_by_id = document.getElementById('meh_12_formule_by_id');
  const div_meh_12_formule_bu_id_js = document.getElementById('div_meh_12_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_12 = document.getElementById('meh_listContainer_12');

  meh_12_formule_by_id.addEventListener('click', function run_meh_12_formule_by_id() {
    div_meh_12_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_12.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_12.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_12.querySelector('ul');
      meh_listContainer_12.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});

document.addEventListener('DOMContentLoaded', function run_skebob() {
  const meh_13_formule_by_id = document.getElementById('meh_13_formule_by_id');
  const div_meh_13_formule_bu_id_js = document.getElementById('div_meh_13_formule_bu_id_js');
  const arrow_img_id_js = document.getElementById('arrow_img_id');
  const meh_listContainer_13 = document.getElementById('meh_listContainer_13');

  meh_13_formule_by_id.addEventListener('click', function run_meh_13_formule_by_id() {
    div_meh_13_formule_bu_id_js.classList.toggle('execut');

    if (!meh_listContainer_13.querySelector('ul')) {
      const ul = document.createElement('ul');

      const listItemsText = [
        "p — давление идеального газа;",
        "V — объем газа.",
      ];

      listItemsText.forEach(text => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
      });

      meh_listContainer_13.appendChild(ul);
    } else {
      const ulToRemove = meh_listContainer_13.querySelector('ul');
      meh_listContainer_13.removeChild(ulToRemove);
    };

    if (arrow_img_id_js.src.endsWith("up.png")) {
      arrow_img_id_js.src = "down.png";
    } else {
      arrow_img_id_js.src = "up.png";
    };
  });
});