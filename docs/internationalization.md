# Internationalization

Internationalization allow the website to support multiple languages. We use the library i18n (short for internationalization) in the project.

## How to use

To have a translated string with i18n, simply use the hook `useTranslation()`. This returns an object with different properties. We will use the property "`t`" returned by `useTranslation()` :

```
const { t } = useTranslation();

t('TRANSLATION_KEY')
```

`TRANSLATION_KEY` is the key of your translation. the t function will return the right value based on the current user language

## Go back to [README](../README.md)
