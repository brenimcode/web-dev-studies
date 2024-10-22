# Flexbox CSS

Flexbox é uma ferramenta poderosa para criar layouts responsivos e flexíveis. Com Flexbox, você pode controlar a distribuição de espaço e o alinhamento dos itens dentro de um contêiner de forma mais eficaz.

## Propriedade `display: flex`

Para usar Flexbox, você deve definir a propriedade `display` do contêiner para `flex`. Isso transforma o contêiner em um contêiner flexível e seus itens em itens flexíveis.

```css
.container {
  display: flex;
}
```

## Propriedades Principais

### 1. `flex-direction`

Define a direção dos itens dentro do contêiner flexível.

- **`row`**: Os itens são dispostos na mesma linha (horizontalmente).
- **`column`**: Os itens são dispostos em colunas (verticalmente).
- **`row-reverse`**: Os itens são dispostos na mesma linha, mas na ordem inversa.
- **`column-reverse`**: Os itens são dispostos em colunas, mas na ordem inversa.

#### Exemplo

```css
.container {
  display: flex;
  flex-direction: row; /* Pode ser row, column, row-reverse, column-reverse */
}
```

### 2. `flex-wrap`

Define como os itens são tratados se não couberem na linha.

- **`wrap`**: Quebra os itens em linhas adicionais.
- **`wrap-reverse`**: Quebra os itens em linhas adicionais, mas na ordem inversa.
- **`nowrap`**: Não quebra os itens; eles permanecem em uma única linha.

#### Exemplo

```css
.container {
  display: flex;
  flex-wrap: wrap; /* Pode ser wrap, wrap-reverse, nowrap */
}
```

### 3. `flex-flow`

É uma shorthand para `flex-direction` e `flex-wrap`. 

#### Exemplo

```css
.container {
  display: flex;
  flex-flow: row wrap; /* Combina flex-direction e flex-wrap */
}
```

### 4. `justify-content`

Alinha os itens ao longo do eixo principal (o eixo definido por `flex-direction`).

- **`center`**: Centraliza os itens.
- **`flex-start`**: Alinha os itens ao início do contêiner.
- **`flex-end`**: Alinha os itens ao final do contêiner.
- **`space-between`**: Distribui o espaço máximo possível entre os itens.
- **`space-around`**: Distribui o espaço ao redor dos itens, com espaço igual nas bordas e entre os itens.
- **`space-evenly`**: Distribui o espaço igualmente entre todos os itens e nas bordas.

#### Exemplo

```css
.container {
  display: flex;
  justify-content: space-between; /* Pode ser center, flex-start, flex-end, space-between, space-around, space-evenly */
}
```

### 5. `align-items`

Alinha os itens ao longo do eixo secundário (perpendicular ao eixo principal).

- **`flex-start`**: Alinha os itens ao início do eixo secundário.
- **`flex-end`**: Alinha os itens ao final do eixo secundário.
- **`center`**: Centraliza os itens ao longo do eixo secundário.
- **`baseline`**: Alinha os itens com base na linha de base dos textos.
- **`stretch`**: Estica os itens para preencher o contêiner (padrão).

#### Exemplo

```css
.container {
  display: flex;
  align-items: center; /* Pode ser flex-start, flex-end, center, baseline, stretch */
}
```

### 6. `align-content`

Alinha as linhas do contêiner flexível no eixo secundário, se houver mais de uma linha.

- **`flex-start`**: Alinha as linhas ao início do eixo secundário.
- **`flex-end`**: Alinha as linhas ao final do eixo secundário.
- **`center`**: Centraliza as linhas ao longo do eixo secundário.
- **`space-between`**: Distribui o espaço máximo possível entre as linhas.
- **`space-around`**: Distribui o espaço ao redor das linhas.
- **`stretch`**: Estica as linhas para preencher o contêiner (padrão).

#### Exemplo

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between; /* Pode ser flex-start, flex-end, center, space-between, space-around, stretch */
}
```

## Exemplos Práticos

Aqui estão alguns exemplos de como usar essas propriedades no Flexbox:

### Exemplo 1: Alinhamento Horizontal e Vertical

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            height: 100vh; /* Altura total da visualização */
            border: 2px solid #000;
        }

        .item {
            background-color: lightblue;
            padding: 20px;
            margin: 10px;
            border: 1px solid #000;
            width: 100px;
            height: 100px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
    </div>
</body>
</html>
```

### Exemplo 2: Alinhamento de Linhas

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .container {
            display: flex;
            flex-wrap: wrap;
            align-content: space-around;
            height: 300px; /* Altura específica para o contêiner */
            border: 2px solid #000;
        }

        .item {
            background-color: lightgreen;
            padding: 20px;
            margin: 10px;
            border: 1px solid #000;
            width: 100px;
            height: 100px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
        <div class="item">Item 6</div>
    </div>
</body>
</html>
```

## Conclusão

Flexbox é uma ferramenta poderosa para criar layouts complexos e responsivos. Ao entender e usar propriedades como `flex-direction`, `flex-wrap`, `justify-content`, `align-items` e `align-content`, você pode controlar facilmente a disposição e o alinhamento dos itens em seu layout.