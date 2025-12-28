import java.util.Scanner;

public class ListaJava {
    public static void main(String[] args) {
    //Tipos de dados ou Variáveis:
    boolean VerdadeiraOuFalsa = true;//Somente dois valores true = verdadeiro ou false = Falsa 
    
    //Inteiros: byte, short, int, long ;para valores inteiros negativos ou positivos:
    byte bits8;//de (-128) até (127)
    short shorts ;//(-32.768) até (32.767)
    int inteiro;// (-2.147.483.648) até (2.147.483.647)
    long BemGrande = 17L;//(-9.223.372.036.854.775.808) até (9.223.372.036.854.775.807)tem que ter o L
    
    //Números de ponto flutuante: float e double; para valores com virgula:
    float ComPonto; //de (-2.147.483.648) até (2.147.483.647)
    double BemGrandeComPonto;//de (-9.223.372.036.854.775.808) até (9.223.372.036.854.775.807)
    
    //Literal:char ;para textos:
    char letra = 'A';//tem q ter aspas
    String str = "isto é uma String do Java"; //String é uma classe que manipula cadeias de caracteres, possuindo métodos para manipulações.
        //Sintaxe do print em java : 
        System.out.println("printa"); //usar sout + tab
        //Sintaxe do scanner em java :
        Scanner variavel = new Scanner(System.in);//Necessita importar java.util.Scanner
        String valor = variavel.next();
        System.out.println(valor);
    /*Caracteres de escape do tipo char:
        '\n‘ - quebra de linha '\r’- retorno de carro '\t‘ - tabulação
        '\\‘ - barra invertida '\b’ - backspace '\f‘ - form feed
        '\'‘ - aspa simples '\”‘ - aspa dupla*/

//Operadores matemáticos:
    /*
    Adição              +
    Subtração           -
    Multiplicação       *
    Divisão(inteira)    /
    Divisão (Resto)     %

    Maior que           >
    Maior ou igual      >=
    Menor que           <
    Menor ou igual      <=
    Igual               ==
    Diferente           !=

    Operadores lógicos
    AND - operador E -         &&
    OR - operador OU -         ||
    */
    
//Concatenação:
    long var = 12345;
    String str1 = "O valor de var é " + var;
        System.out.println(str1);
        
//Conversão de Tipos:
    double d = 1.99;
    int i = (int) d;//perde precisão
    
//Ternario:
    //Sintaxe:
        //variável x =(expressão)?valor se verdadeiro : valor se falso
    int a = 12;
    String b;
    b = (a ==5)? "a é igual a 5" : "a é diferente de 5";
        System.out.println("Resultado: "+ b);
    b = (a ==12)? "a é igual a 12" : "a é diferente de 12";
        System.out.println("Resultado: "+ b);
        
    a = 14;
    b = (a> 14)? "Atrasado": (a<14)? "Adiantado": "No Horário";
        System.out.println("Resultado: "+ b);
        
//Controles de Fluxo do Programa:
    //if()/else:
    int idade = 20;
        if (idade <= 12 ) {
            System.out.println( "Criança");
        }
        else if (idade <= 19 ) {
            System.out.println("Adolescente" );
        }
        else if ( idade <= 60 ) {
            System.out.println( "Adulto");
        }
        else {
            System.out.println( "Idoso");
        }
    //switch( )
    int numero = 1;
    switch (numero ) {//para int
        case 1:
            System.out.println( "UM");
            break;
        case 2:
            System.out.println( "DOIS" );
            break;
        case 3:
            System.out.println("TRES");
            break;
        default ://para nem um caso
            System.out.println( "NENHUM");
        break;
    }
    //Laço while( )
    int i1 = 0;
        //laço while() com bloco de código definido 
         while(i1 < 10) {
            System.out.println( "Linha:"+ i1);
        i1++;
            }
    //Laço do / while( )
    int i2 = 0;
    //laço do / while() com bloco de código definido 
    do {
    System.out.println( "Linha: "+ i2);
    i2++;
    } while(i2 < 10);
    //Laço for( )
        //Sintaxe:
        /*for( iniciação; condição; incremento ){ 
            bloco_de_código_a_executar;
        ]*/
        for(int i3=0; i3 < 10; i3++) {
            System.out.println("Linha: "+ i3);
        }
        
    //clase
    Newclass objeto1 = new Newclass(1); //instância para criar um objeto sem entrada de parametros
    // da os valores
    objeto1.setNome("objeto1");
    objeto1.setValor(1);
    //chama metodo
    objeto1.informa();
    objeto1.setClase(true);
    objeto1.informa();
 }
}
