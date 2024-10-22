# Modelo de Caixas (Box Model) em CSS

O Modelo de Caixas (Box Model) define como os elementos são exibidos e dimensionados na página web. Cada elemento é representado como uma caixa.

## Estrutura de uma Caixa

Uma caixa CSS é composta por:

- **Conteúdo (Content):** Área onde o texto e imagens são exibidos.
- **Padding:** Espaçamento interno entre o conteúdo e a borda.
- **Border:** Linha ao redor do padding e do conteúdo.
- **Margin:** Espaçamento externo ao redor da borda.
- **Outline (Opcional):** Linha adicional ao redor da borda (não afeta o layout).

### Exemplo Visual do Modelo de Caixas

```
+---------------------------+
|    Margin (espaço externo)  |
|  +---------------------+  |
|  |   Border (linha)   |  |
|  |  +---------------+ |  |
|  |  |   Padding     | |  |
|  |  |  +---------+  | |  |
|  |  |  | Content |  | |  |
|  |  |  +---------+  | |  |
|  |  +---------------+ |  |
|  +---------------------+  |
+---------------------------+
```
![Exemplo](https://www.alura.com.br/artigos/assets/entendendo-como-funciona-box-model-e-o-box-sizing/box-model-no-devtools.png)


## Propriedades do Modelo de Caixas

- **`width`**: Define a largura do conteúdo da caixa.
- **`height`**: Define a altura do conteúdo da caixa.
- **`padding`**: Espaço interno ao redor do conteúdo.
  - Exemplo: `padding: 20px;` (Aplicado uniformemente em todos os lados)
- **`border`**: Define a borda ao redor do padding e conteúdo.
  - Exemplo: `border: 2px solid black;` (Largura, estilo e cor da borda)
- **`margin`**: Espaço externo ao redor da borda.
  - Exemplo: `margin: 10px;` (Aplicado uniformemente em todos os lados)
- **`outline`**: Linha adicional ao redor da borda (não afeta o layout).
  - Exemplo: `outline: 1px dashed red;`

## Tipos de Caixa

### Box-Level (Block-Level)

- **Exemplos:** `div`, `h1` a `h6`, `main`, `footer`, `section`, `article`
- **Características:**
  - Sempre inicia em uma nova linha.
  - Ocupa toda a largura disponível do contêiner pai.
  - Pode ter largura e altura definidas.
  - Margens verticais entre elementos podem colidir (colapso de margens).

#### Exemplo de CSS para Box-Level

```css
.box-level {
  display: block; /* Comportamento padrão de box-level */
  width: 100%;
  height: 50px;
  background-color: lightblue;
  margin: 10px 0; /* Margem vertical */
  padding: 10px;
}
```

### Inline-Level

- **Exemplos:** `span`, `a`, `strong`, `em`, `img`
- **Características:**
  - Não inicia em uma nova linha.
  - Ocupa apenas a largura necessária para o conteúdo.
  - Margens verticais e altura não afetam o layout; apenas margens e padding horizontais são aplicados.

#### Exemplo de CSS para Inline-Level

```css
.inline-level {
  display: inline; /* Comportamento padrão de inline-level */
  padding: 5px; /* Padding aplicado, mas verticalmente não afeta o fluxo */
  margin: 5px; /* Margens horizontais são aplicadas */
  background-color: lightgreen;
}
```

### Inline-Block

- **Comportamento:** Combina características de box-level e inline-level.
  - Exibido na mesma linha que outros elementos inline.
  - Permite definir largura e altura, como elementos box-level.

#### Exemplo de CSS para Inline-Block

```css
.inline-block-example {
  display: inline-block;
  width: 150px;
  height: 50px;
  background-color: lightcoral;
  padding: 10px;
  margin: 5px;
}
```

## Alterando o Comportamento com `display`

- **`display: block`**: Força o elemento a se comportar como um elemento box-level.
- **`display: inline`**: Força o elemento a se comportar como um elemento inline-level.
- **`display: inline-block`**: Combina características de ambos, permitindo definir largura e altura enquanto mantém o comportamento inline.

## Exemplos Práticos

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .box-level {
            display: block;
            width: 100%;
            height: 50px;
            background-color: lightblue;
            margin: 10px 0;
            padding: 10px;
        }

        .inline-level {
            display: inline;
            padding: 5px;
            margin: 5px;
            background-color: lightgreen;
        }

        .inline-block-example {
            display: inline-block;
            width: 150px;
            height: 50px;
            background-color: lightcoral;
            padding: 10px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <div class="box-level">Box-Level Element</div>
    <span class="inline-level">Inline-Level Element 1</span>
    <span class="inline-level">Inline-Level Element 2</span>
    <div class="inline-block-example">Inline-Block Element</div>
</body>
</html>
```