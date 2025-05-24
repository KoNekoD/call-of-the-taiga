document.addEventListener('DOMContentLoaded', () => {
    const dateRangeInput = document.getElementById('date-range');
    const guestsInput = document.getElementById('guests');
    const searchButton = document.getElementById('search-button');

    // Добавляем обработчик клика на иконку календаря
    const calendarIcon = document.querySelector('.calendar-icon');
    calendarIcon.addEventListener('click', () => {
        dateRangeInput.focus();
    });

    // Проверяем, что дата выезда больше даты заезда
    dateRangeInput.addEventListener('input', () => {
        const dates = dateRangeInput.value.split(' - ');
        if (dates.length === 2) {
            const checkInDate = new Date(dates[0]);
            const checkOutDate = new Date(dates[1]);
            if (checkOutDate <= checkInDate) {
                alert('Дата выезда должна быть позже даты заезда');
                dateRangeInput.value = '';
            }
        }
    });

    // Обработчик кнопки "Найти"
    searchButton.addEventListener('click', () => {
        const checkInDate = dateRangeInput.value.split(' - ')[0];
        const checkOutDate = dateRangeInput.value.split(' - ')[1];
        const guests = guestsInput.value;

        if (!dateRangeInput.value || !guests) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        // Здесь можно добавить логику для отправки данных на сервер
        alert(`Бронирование с ${checkInDate} по ${checkOutDate} для ${guests} гостей`);
    });
});




   document.addEventListener('DOMContentLoaded', function () {
            flatpickr("#date-range", {
                mode: "range",
                dateFormat: "Y-m-d",
                minDate: "today",
                defaultDate: ["today", "today"],
                onChange: function(selectedDates) {
                    console.log("Выбранные даты:", selectedDates);
                }
            });
        });


         flatpickr.localize({
            firstDayOfWeek: 1,
            weekdays: {
                shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                longhand: [
                    "Воскресенье",
                    "Понедельник",
                    "Вторник",
                    "Среда",
                    "Четверг",
                    "Пятница",
                    "Суббота"
                ]
            },
            months: {
                shorthand: [
                    "Янв",
                    "Фев",
                    "Мар",
                    "Апр",
                    "Май",
                    "Июн",
                    "Июл",
                    "Авг",
                    "Сен",
                    "Окт",
                    "Ноя",
                    "Дек"
                ],
                longhand: [
                    "Январь",
                    "Февраль",
                    "Март",
                    "Апрель",
                    "Май",
                    "Июнь",
                    "Июль",
                    "Август",
                    "Сентябрь",
                    "Октябрь",
                    "Ноябрь",
                    "Декабрь"
                ]
            },
            weekAbbreviation: "Нед",
            rangeSeparator: " до ", // Заменяет "to" на "до"
            scrollTitle: "Перемещение по %s",
            toggleTitle: "Переключение %s",
            amPM: ["AM", "PM"],
            yearAriaLabel: "Год"
        });








  function initSlider(sliderElement) {
    const slides = sliderElement.querySelector('.slides');
    const slideItems = sliderElement.querySelectorAll('.slide');
    const prevButton = sliderElement.querySelector('[data-prev]');
    const nextButton = sliderElement.querySelector('[data-next]');
    const pagination = sliderElement.querySelector('.pagination');

    let currentIndex = 0;
    const slideWidth = slideItems[0].offsetWidth;
    const totalSlides = slideItems.length;


    for (let i = 0; i < totalSlides; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => goToSlide(i));
      pagination.appendChild(button);
    }

    const paginationButtons = pagination.querySelectorAll('button');
    paginationButtons[currentIndex].classList.add('active');

    function updateSlider() {
      slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
      updatePagination();
    }

    function updatePagination() {
      paginationButtons.forEach((btn, i) => {
        btn.classList.toggle('active', i === currentIndex);
      });
    }

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
      updatePagination();
    });

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
      updatePagination();
    });


  }


  document.querySelectorAll('.slider').forEach(initSlider);
