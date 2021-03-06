# CherryLink - плагин для ручной перелинковки статей в WordPress.

## Стоп-слова

Находятся в файле stopwords.php. Удалите ненужные строчки и сохраните файл.

## TODO
относительные ссылки
поиск анкоров

## ChangeLog

v 1.1.19
- Фикс кодировки в шаблоне ссылки
- Новые теги {imagesrc} {anons}

v 1.1.17
- Мелкие фиксы

v 1.1.16
- Быстрая вставка анкора-тайтла (заголовка) при нажатии CTRL+Click
- Мелкие фиксы

v 1.1.15
- Обновлена библиотека для автоматического обновления плагина

v 1.1.14
- Вернулась обратная совместимость с версиями WP < 4.9.6
- Фикс для поддержки PHP 5.3
- В алго релевантности теперь можно использовать сео тайтл

v 1.1.13
- Фикс фикса для обновления 4.9.6 (возврат к истокам, спасибо разработчикам WP/TinyMCE за волшебный апдейт)

v 1.1.12
- Фикс для обновления 4.9.6 (изменен способ загрузки скрипта, перенесен в плагины tinymce)

v 1.1.11 
- Исправлен редактор в страницах
- Добавлена проверка наличия curl библиотеки
- Реиндексация ссылок при установке плагина исправлена

v 1.1.9 - 1.1.10
- Исправлено: переход к ссылки таксономии в тексте
- Обновлены наименования переменных и функций, минимизируем конфликты

v 1.1.8
- Небольшие исправления и оптимизации (задержка обращений к серверу, буква Ё в фильтре)

v 1.1.3 - v.1.1.6
- Добавлена возможность вставки одной и той же ссылки несколько раз 
- Добавлен экспорт настроек, и сброс на дефолтные значения
- Исправлена проблема с members, теперь ссылки считаются только из редактора с id=content (будет переделано с поддержкой f-seo и yoast позже)
- Добавлена возможность открыть настройки плагина для разных ролей пользователей (через плагин user role editor)

v.1.1.2
- Мелкие фиксы

v.1.1.1
- Добавлен выбор минимальной длины слов, которые не учитываются алгоритмом схожести
- Мелкие фиксы

v.1.1.0
- Добавлены категории, метки и произвольная таксономия для перелинковки.
- Добавлено поле "стоп-слова" в настройках алгоритма схожести.
- Расширен базовый список стоп-слов, которые не учитываются алгоритмом.
- Теперь можно скрыть\показать как вставленные ссылки, так и не вставленные (два отдельных чекбокса)
- Ссылки на документы, картинки и прочее медиа теперь не учитываются в подсчете (в нижней панеле количества ссылок)
- Изменена проверка лицензий - теперь нет необходимости явно сообщать мне свои домены :)
- Убрал из вариантов покупки безлимитную лицензию. 
Подробности в посте: http://
Теперь максимальное количество активаций для 1 ключа равно 50. Кто купил безлимит, для вас будет доступно 70 активаций.


v 1.0.9
Значительно улучшено быстродейстие и отклик на изменения, скорость фильтрации ссылок и т.д.
Мелкие фиксы

v 1.0.8
Небольшие исправления

v 1.0.7
Автообновление скриптов при обновлении плагина, чтобы не чистить кэш каждый раз

v 1.0.6
Значительно улучшена производительность плагина (были проблемы на слабых машинах, если на сайте сотни статей), будут дополнительные улучшения в будущем
Добавлен фильтр по "запланированным" записям (черновик с запланированным временем публикации)
Исправлено: иногда ссылки не вставлялись, если отсутствовал какой-либо атрибут (автор, категория и тд.)


v 1.0.5
Исправлен косяк на произвольных типах записей, теперь плагин не загружается, если на странице нет поля редактора
Исправлены прыжки вверх при открытии/закрытии панели перелинковки
Добавлена кнопка (крестик) для закрытия панели с ссылками 
Таблицы рубрик/авторов в настройках сделал по компактнее 
Панель ссылок теперь не лезет выше окна загрузки изображений (изменен z-index)


v 1.0.4
Исправлен Warning str_repeat (временный фикс, требует изучения проблемы)



