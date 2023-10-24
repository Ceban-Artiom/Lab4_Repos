#include <iostream>
#include <cmath>
using namespace std;

int main(){

    
    int n1, n2, n3, base;

    cout << "Choose the base: binary or decimal (2 or 10)" << endl;
    cin >> base;
    cout << "Enter the value: ";
    cin >> n1;
    n3 = n1;

    if(base == 2){
        for(int i = 0; n3 > 0; i++){
            if(n3 % 10 == 1){
                n2 += pow(2, i);
                n3 /= 10;
            }
            else n3 /= 10;
        }
    }

    if(base == 10){
        for(int i = 0; n3 > 0; i++){
            n2 += (n3 % 2)*pow(10, i);
            n3 /= 2;
        }
    }

    
    switch(base){
        case 2: cout << '(' << n1 << ")2" << " = " << '(' << n2 << ")10" << endl;
            break;
        case 10: cout << '(' << n1 << ")10" << " = " << '(' << n2 << ")2" << endl;
            break;
    }

    system("pause");

    return 0;
}