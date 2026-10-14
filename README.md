# nodejs-ci-demo

## Сипаттамасы
Қарапайым калькулятор модулі (қосу, алу, көбейту, бөлу). Жоба Jenkins CI/CD pipeline жұмысын көрсетуге арналған (СОӨЖ, 38-нұсқа).

## Қолданылатын технологиялар
Node.js (>=20), npm, Git, GitHub, Jenkins

## Орнату
```bash
npm install
```

## Іске қосу
```bash
npm start
```

## Build
```bash
npm run build
```

## Тестілеу
```bash
npm test
```

## CI/CD
`Jenkinsfile` ішінде pipeline сипатталған:
Checkout → Install dependencies → Build → Test → Result.
Тест нәтижелері JUnit форматында (`test-results.xml`) Jenkins-ке жіберіледі.
