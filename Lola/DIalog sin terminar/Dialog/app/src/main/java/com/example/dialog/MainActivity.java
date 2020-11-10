package com.example.dialog;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;

import java.util.Random;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Actividad 1 //

        Button boton1 = (Button) findViewById(R.id.act1);

        boton1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {


                Intent intent = new Intent(MainActivity.this,MainActivity.class);

                AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this);
                builder.setTitle("Actividad 1");
                builder.setIcon(android.R.drawable.btn_star_big_off);
                builder.setMessage("Mensaje");



                   builder.setPositiveButton("ok",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog,
                                                int id) {


                            }
                        });
                        builder.setNegativeButton("cancel",
                                new DialogInterface.OnClickListener() {
                                    public void onClick(DialogInterface dialog,
                                                        int id) {


                                    }
                                });
                AlertDialog dialog = builder.create();

                dialog.show();
            }
        });




            // Actividad 2
        final Button boton2 = (Button) findViewById(R.id.act2);
        final LinearLayout fondo = findViewById(R.id.fondoo);

        boton2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                AlertDialog.Builder fondos = new AlertDialog.Builder(MainActivity.this);
                fondos.setMessage("Quieres cambiar el fondo?")

                        .setTitle("Fondos")
                         .setIcon(android.R.drawable.alert_dark_frame)
                        .setPositiveButton("ok",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog,
                                                int id) {

                                Random aleatorio = new Random();
                                int color = Color.argb(255, aleatorio.nextInt(256), aleatorio.nextInt(256), aleatorio.nextInt(256));
                                fondo.setBackgroundColor(color);

                            }
                        });

                        fondos.setNegativeButton("cancel",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog,
                                                int id) {


                            }
                        });
                AlertDialog dialog = fondos.create();

                dialog.show();
            }
        });

    }
}



