#include <stdio.h>

void checkSum(int*, int);

int totalIntegers = 0;

int main(void) {
  int a[1000];
  int i = 0;
  int sum = 0;

  printf("How many integers do you wish to enter?");
  scanf("%d", &totalIntegers);

  for (i = 0; i < totalIntegers; i++){
    scanf("%d", &a[i]);
  }

  printf("Enter the desired sum\n");
  scanf("%d", &sum);

  checkSum(a, sum);
}

void checkSum(int b[], int s){
  int j = 0;
  int k = 0;
  for (j = 0; j < totalIntegers - 1; j++){
    for (k = 1; k < totalIntegers; k++){
      if (b[j] + b[k] == s){
        printf("%d %d", j, k);
        return;
      }
    }
  }
  printf("No two integers match this sum");
}
