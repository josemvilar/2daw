package com.example.forresult;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button button = (Button) findViewById(R.id.button);
        final TextView tv = findViewById(R.id.editText);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this, MainActivity2.class);


                String nombre = tv.getText().toString();
                intent.putExtra("usuario", nombre);
                startActivityForResult(intent,2);
            }
        });

    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 2 && resultCode == RESULT_OK) {
            String res = data.getExtras().getString("resultado");
        }
        TextView t1 = findViewById(R.id.textView);
        Button button = (Button) findViewById(R.id.button);
        final EditText et = findViewById(R.id.editText);
        TextView t2 = findViewById(R.id.t1);

        if (resultCode == RESULT_OK) {
            t1.setText("");
            t1.setVisibility(View.GONE);
            button.setVisibility(View.GONE);
            et.setVisibility(View.GONE);


            String respuesta=data.getExtras().getString("resultado");
            t2.setText("¡Bienvenido a Gryffindor "+respuesta+"!");
        }


        if (resultCode == RESULT_CANCELED) {
            t1.setVisibility(View.GONE);
            button.setVisibility(View.GONE);
            et.setVisibility(View.GONE);


            String respuesta=data.getExtras().getString("resultado");
            t2.setText("¡Bienvenido a Slytherin "+respuesta+"!");
        }
    }
}