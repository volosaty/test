import { logLevel } from './enums.js'

const isProduction = process.env.NODE_ENV === 'production'

export default
    {
        run: true,

        version: "v.0.2.0",

        log: isProduction ? logLevel.INFO : logLevel.DEBUG,
        devId: 84677480,
        //dailyPicShowDateTime: new Date(), //дата, после которой показать картинку в след раз
        duplicateLogToDevChat: !isProduction, //принудительно дублировать вообще все логи в дев чат

        autostart: true,
        intervalMain: 1,//короткий интервал отслеживающий вселеную, mins 1-1440 (1 day)
        intervalDaily: { //интервал для выбора следующего отображения картинки (в мин)
            min: 1,
            max: isProduction ? 1000 : 4 //также это - интервал (мин) перезапуска дейли таймера. происходит не ровно, а по срабатыванию MAIN
        },
        isMsgForAll: false, // /cmd msg TEXT доступно всем или только деву
        //interval: 10, //sec
        //intervalPic: 1, //days - юзер картинок в день
        // maxPicRequests: 2, //максимальное кол-во запросов картинок (пока для всех частов) в период

        botCmd: 'пш', //'pico',

        pathStorage: `${__dirname}/../storage/`,
        path: `${__dirname}/../../../../Pictures/`,
        dirInbox: isProduction ? 'Dashchan' : 'inbox',
        dirPriority: `priority`,
        archiveName: `done`,
        stateFile: 'state.json',
        dirWords: `words`,
        dialog: {
            keys: {
                'бог': ['бог', 'бога', 'богу', 'богом', 'б-г', 'христос', 'иисус'],
                'водка': ['водка', 'бухло', 'бухать', 'бухыч', 'водочки', 'водюля', 'водюли'],
                'гитлер': ['гитлер', 'слава', 'свастика', 'адик', 'адольф', 'ниггер'],
                'гот': ['гот', 'goth', 'готуем', 'готика'],
                'жопа': ['жопа', 'ass', 'булки'],
                'кислота': ['кислота', 'кислоты', 'кислоту', 'кислоте', 'наркота', 'наркоты', 'наркоту', 'стаф', 'нарко','грибы','4:20','420','зелень','дудка','дудло','псилоцибин','тгк'],
                'космос': ['космос', 'космический', 'звезды', 'космическая', 'звезда'],
                'коты': ['кот', 'кошка','кошак','коты','кошки', 'котофей', 'котаны', 'кота', 'cat', 'cats','котопес', 'котов', 'бастик', 'бастиан'],
                'мск': ['москвабад', 'мск', 'москва', 'столица', 'москве', 'москвы', 'москву'],
                'пашабот': ['пашабот', 'паша'],
                "пока": ['пока', 'bye', 'пис'],
                "привет": ['привет', 'hi','здарова', 'хелло', 'хай', 'алоха', 'здрасте', 'здравствуй', 'прив', 'ну привет'],
                'пфф': ['пфф','мудак', 'сука', 'гнида', 'тварь'],
                'россия': ['россия','рашка', 'раша', 'русланд', 'русиш', 'русский', 'россии', 'россию', 'россие', 'роися', 'russia', 'руссия'],
                'сатана': ['сатана', 'сатане', 'сатану', 'сатаны', 'дьявол', 'дьяволу'],
                'смерть': ['смерть', 'death', 'труп', 'смерти', 'насмерть'],
                'спб': ['спб','питер', 'санкт-петербург', 'столица2', 'питере', 'питеру'],
                "хуй": ['хуй', 'hui', 'хуйня', 'нахуй', 'fuck', 'бля', 'блять','пизда','пиздец'],
                "че": ['че', 'что'],

                'botgo': ['botgo'],
                'bothelp': ['bothelp'],
                'botstopnosuper': ['botstopnosuper']
            },
            texts: {
                'бог': ['Бога на вас нет', 'Привет Дедушке Морозу'],
                'водка': ['Рашн водка, водки даааай', 'Лучше водки только водка', 'Дауайте уыпьем уотки'],
                'гитлер': ['Нет фашизму', 'Слава Украини!', 'О, мой фюрер'],
                'гот': ['Готуем, сегодня мы с тобой готуем', 'Паша-гот, мне скучно'],
                'жопа': ['Полная жопа', 'Тач папунда'],
                'кислота': ['Всем грибов!', 'Есть чо?', 'На часах 4:20!', 'Лето-осень-папиросим', 'Слава психонафтам!'],
                'космос': ['В каждом из нас'],
                'мск': ['В Москве вся сила, брат', 'Москва - говно, Москва - говно', 'Столица одной шестой части суши, например', 'Не всем по нраву', 'Москва - говно, Уфра - заебись', 'Ты - самая любимая'],
                'пашабот': ['Я - пашабот'],
                'пока': ['Пока братиш', 'Ломай меня полностью', 'Море, до свиданья'],
                "привет": ["Алоха", "Трям", "Привет, чят", "Зиган, котаны", "Ну, погнали", 'Вечер в хату'],
                'пфф': ['Пфф', 'Ну ты и олень', 'Незачет', 'Ты мне это сказал?', 'Учи матчасть', 'Поговори с моей рукой', 'Отвали'],
                'россия': ['Священная наша держава', 'Любимая нелюбимая родина', 'Кто не отсюда, тот пятая колонка', 'Слава этой стране'],
                'сатана': ['Наш рулевой!', 'Ave Satanas!'],
                'смерть': ['Вечный сон'],
                'спб': ['Вторая столица', 'Болото', 'Город родной, Питер - я твой', 'Недомосква, псевдоинтеллигенция', 'Это Питер, детка'],
                "хуй": ['Хи хи хуй', 'Не будем ругаться', 'Хуеботство', 'Хуй на все на это', 'Ну вот ну вот ну вот сейчас встанет'],
                "че": ['Я тебя ваще не понял', 'Че ты мямлишь?', 'Сорян, отвлекся, че ты там?', 'Давай по-нашему', 'Не понимать', 'Нука-нука', 'Ты мне это сказал?', 'Не понелъ'],

                'botgo': ['Привет, я - Пашабот, и я буду жить с вами.\nОбращайтесь ко мне /пш. Впрочем, я мало что знаю - можете попробовать разгадать мой словарный запас.\nВ остальное время буду срать картинками.\nПогнали.'],
                'bothelp': [ `HOW TO:\n/пш - зис хелп.\n/пш какой-то текст - картинка и текст в ответ.`],
                'botstopnosuper': ['Э, парниша, не надо мне указывать', 'Найс трай', 'Ты сам то чего добился?'],
            }
        },
    }
